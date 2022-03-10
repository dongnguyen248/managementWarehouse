import { useEffect, useState } from 'react';
import './InventoryModals.css';
import DatePicker from 'react-datepicker';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterial } from 'services/inventoriesService';

const ImportMaterial = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const [areaId, setAreaId] = useState(1);
    const [locator, setLocator] = useState('');
    const { unit } = useSelector((state) => state.unit);
    const { line } = useSelector((state) => state.line);
    const { area } = useSelector((state) => state.area);
    const [material, setMaterial] = useState({
        inputDate: new Date(),
        checkedDate: new Date(),
        qCode: '',
        item: '',
        unit: '',
        Specification: '',
        price: 0,
        Remark: '',
        checked: false,
        checkResult: true,
        allocated: false,
        Po: '',
        LineRequest: '',
        quantity: 0,
        supplier: '',
        buyer: '',
        checker: '',
    });

    useEffect(() => {
        let areaName = area?.filter((item) => item.id == areaId);
        if (areaName.length !== 0) {
            setLocator('QMA01.' + areaName[0].name + '-' + location);
        } else {
            setLocator('QMA01.');
        }
    }, [areaId, location]);
    const handleSaveMaterial = () => {
        dispatch(
            createMaterial({
                location: location,
                qCode: material.qCode,
                item: material.item,
                unit: material.unit,
                Specification: material.Specification,
                Remark: material.Remark,
                Zone: areaId,
                importHistories: [
                    {
                        ImportDate: material.inputDate,
                        price: material.price,
                        quantity: material.quantity,
                        supplier: material.supplier,
                        lineRequest: material.LineRequest,
                        buyer: material.buyer,
                        po: material.Po,
                        handler: 1,
                        allocated: material.allocated,
                        inspection: {
                            status: material.checkResult,
                            inspector: material.checker,
                            result: material.checked,
                        },
                    },
                ],
            }),
        );
        console.log({ ...material, Zone: areaId });
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
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        qCode: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Area</label>
                        </td>
                        <td>
                            <select
                                className='form-control'
                                onChange={(e) => {
                                    return setAreaId(e.target.value);
                                }}
                                defaultValue={1}>
                                {area?.map((item) => {
                                    return (
                                        <option
                                            className='form-control'
                                            key={item.id}
                                            value={item.id}>
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
                                onChange={(e) => setLocation(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Item</label>
                        </td>
                        <td>
                            <input
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
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        Specification: e.target.value,
                                    })
                                }
                                className='form-control'></textarea>
                        </td>
                        <td className='tdleft'>
                            <label>Unit</label>
                        </td>
                        <td>
                            <select
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        unit: e.target.value,
                                    })
                                }>
                                {unit?.map((item) => {
                                    return (
                                        <option
                                            className='form-control'
                                            key={item.id}
                                            value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Quantity</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        quantity: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                                required='required'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>Price (USD)</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        price: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                                required='required'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Input Date</label>
                        </td>
                        <td>
                            <DatePicker
                                dateFormat='yyyy-MM-dd'
                                selected={material.inputDate}
                                onChange={(date: Date) =>
                                    setMaterial({
                                        ...material,
                                        inputDate: date,
                                    })
                                }
                                className='form-control'
                            />
                        </td>
                        <td className='tdleft'>
                            <label>PO Number</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        Po: e.target.value,
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
                                            LineRequest: e.target.value,
                                        })
                                    }>
                                    {line?.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </label>
                        </td>
                        <td className='tdleft'>
                            <label>Remark</label>
                        </td>
                        <td>
                            <textarea
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        Remark: e.target.value,
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
                                className='form-check-input'
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
                                            checkResult:
                                                e.target.value === 'ACCEPT'
                                                    ? true
                                                    : false,
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
                                disabled
                                defaultValue={locator}
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
                                className='form-check-input'
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

export default ImportMaterial;
