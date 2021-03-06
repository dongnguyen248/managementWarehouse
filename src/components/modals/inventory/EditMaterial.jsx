import { useState } from 'react';
import './InventoryModals.css';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { updateMaterial } from 'services/inventoriesService';
import moment from 'moment';
const EditMaterial = ({ data }) => {
    console.log(data);
    const { area } = useSelector((state) => state.area);
    const { unit } = useSelector((state) => state.unit);

    const dispatch = useDispatch();
    const areaSelect = area.filter((item) => item.description === data.zone);
    const unitSelect = unit.filter((item) => item.name === data.unit);

    const userId = useSelector(
        (state) => state.persistedReducer.user.currentUser.employee.id,
    );
    const [material, setMaterial] = useState({
        startDate: new Date(),
        checkedDate: new Date(),
        qCode: data.qCode,
        area: '',
        location: '',
        item: '',
        spec: '',
        unit: '',
        inventories: 0,
        price: 0,
        buyer: '',
        poNumber: '',
        receiver: '',
        remark: '',
        supplier: '',
        checked: false,
        checkResult: '',
        received: false,
    });
    const handleSaveMaterial = () => {
        dispatch(
            updateMaterial({
                ImportDate: material.inputDate,
                price: material.price,
                quantity: material.quantity,
                supplier: material.supplier,
                lineRequest: material.LineRequest,
                buyer: material.buyer,
                po: material.Po,
                handler: userId,
                material: data.id,
                allocated: material.allocated,
                InspectionNavigation: {
                    status: material.checkResult,
                    inspector: material.checker,
                    result: material.checked,
                },
            }),
        );
    };
    return (
        <>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td className='tdleft'>
                            <label>QCode</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.qCode}
                                disabled
                                type='text'
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Zone</label>
                        </td>
                        <td>
                            <select
                                defaultValue={areaSelect[0].id}
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        area: e.target.value,
                                    })
                                }>
                                {area?.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Location</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.location}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        location: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Item</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.item}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        item: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Specification</label>
                        </td>
                        <td>
                            <textarea
                                defaultValue={data.specification}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        spec: e.target.value,
                                    })
                                }
                                className='form-control'></textarea>
                        </td>
                        <td className='tdleft'>
                            <label>Unit</label>
                        </td>
                        <td>
                            <select
                                defaultValue={unitSelect[0].id}
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        unit: e.target.value,
                                    })
                                }>
                                {unit?.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Inventories</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.inventory}
                                type='text'
                                className='form-control'
                                required='required'
                                disabled
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Price (USD)</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.price}
                                type='text'
                                className='form-control'
                                required='required'
                                disabled
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Import Date</label>
                        </td>
                        <td>
                            <input
                                defaultValue={moment(
                                    data.lastImportDate,
                                ).format('DD-MM-YYYY')}
                                disabled
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>PO Number</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.poNumber}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        poNumber: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Supplier</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.supplier}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        supplier: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Buyer</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.buyer}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        buyer: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Receiver</label>
                        </td>
                        <td>
                            <label>
                                <select
                                    className='form-control'
                                    onChange={(e) =>
                                        setMaterial({
                                            ...material,
                                            receiver: e.target.value,
                                        })
                                    }>
                                    <option className='form-control'>
                                        5 S
                                    </option>
                                    <option className='form-control'>
                                        CAPL Line
                                    </option>
                                </select>
                            </label>
                        </td>
                        <td className='tdleft'>
                            <label>Remark</label>
                        </td>
                        <td>
                            <textarea
                                defaultValue={data.remark}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        remark: e.target.value,
                                    })
                                }
                                className='form-control'
                                rows='2'></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td className='tdleft'>
                            <label>Checked</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        checked: e.target.checked,
                                    })
                                }
                                type='checkbox'
                                name='chkinpection'
                            />
                        </td>

                        <td className='tdleft'>
                            <label>Check Date</label>
                        </td>
                        <td>
                            <DatePicker
                                dateFormat='yyyy-MM-dd'
                                className='form-control'
                                selected={material.checkedDate}
                                onChange={(date: Date) =>
                                    setMaterial({
                                        ...material,
                                        checkedDate: date,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Checker</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.checker}
                                onChange={(e) => {
                                    setMaterial({
                                        ...material,
                                        checker: e.target.value,
                                    });
                                }}
                                type='text'
                                className='form-control'
                            />
                        </td>

                        <td className='tdleft'>
                            <label>Check Result</label>
                        </td>
                        <td>
                            <label>
                                <select
                                    className='form-control'
                                    onChange={(e) => {
                                        setMaterial({
                                            ...material,
                                            checkResult: e.target.value,
                                        });
                                    }}>
                                    <option className='form-control'>
                                        ACCEPT
                                    </option>
                                    <option className='form-control'>
                                        RETURN
                                    </option>
                                </select>
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td className='tdleft'>
                            <label>Locator</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.locator}
                                onChange={(e) => {
                                    setMaterial({
                                        ...material,
                                        locator: e.target.value,
                                    });
                                }}
                                type='text'
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Received</label>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        received: e.target.checked,
                                    })
                                }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='col-md-12 text-center'>
                <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={handleSaveMaterial}>
                    Save Material
                </button>
            </div>
        </>
    );
};

export default EditMaterial;
