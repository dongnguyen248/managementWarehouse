import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { addExportHistory } from 'services/exportHistoriesService';
import swal from 'sweetalert';
import './InventoryModals.css';
function ExportMaterial({ data }) {
    const dispatch = useDispatch();
    const { line } = useSelector((state) => state.line);
    const { costAccounts } = useSelector((state) => state.costAccounts);
    const { departments } = useSelector((state) => state.departments);
    const [exportValue, setExportValue] = useState(0);
    const [CostAccountId, setCostAccountId] = useState(1);
    const [departmentId, setDepartmentId] = useState(1);
    const [costAccountItems, setCostAccountItems] = useState([]);
    const [constAccoutItemId, setCostAccountItemId] = useState(1);
    const userId = useSelector(
        (state) => state.persistedReducer.user.currentUser.employee.id,
    );
    const [material, setMaterial] = useState({
        outputDate: new Date(),
        line: 63,
        accCode: '',
        requester: '',
        Note: '',
    });
    useEffect(() => {
        setCostAccountItems(
            costAccounts?.filter((c) => {
                return c.id === CostAccountId;
            }),
        );
    }, [CostAccountId]);
    const handleExport = () => {
        dispatch(
            addExportHistory({
                Material: data[0].id,
                ExportDate: material.outputDate,
                Quantity: exportValue,
                Requestor: material.requester,
                Department: departmentId,
                costAccount: CostAccountId,
                costAccountItem: constAccoutItemId,
                Remart: material.Note,
                Receiver: material.line,
                Handler: userId,
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
                                defaultValue={data[0].qCode}
                                type='text'
                                className='form-control'
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
                                defaultValue={data[0].lastImportDate}
                                type='text'
                                className='form-control'
                                disabled
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Export Date</label>
                        </td>
                        <td>
                            <DatePicker
                                defaultValue={data[0].inputdate}
                                type='text'
                                className='form-control'
                                selected={material.outputDate}
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        outputDate: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Inventories</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data[0].inventory}
                                type='text'
                                className='form-control'
                                disabled
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Export Quantity</label>
                        </td>
                        <td>
                            <input
                                defaultValue={exportValue}
                                type='text'
                                className='form-control'
                                onChange={(e) => {
                                    let minusInventories =
                                        data[0].inventory - e.target.value;
                                    minusInventories >= 0
                                        ? setExportValue(e.target.value)
                                        : swal(
                                              "quanity export can't be more than inventories",
                                          ).then(function () {
                                              e.target.value = 0;
                                          });
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Line Recive</label>
                        </td>
                        <td>
                            <select
                                defaultValue={63}
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        line: e.target.value,
                                    })
                                }>
                                {line?.map((item) => {
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
                            <label>Account Code</label>
                        </td>
                        <td>
                            <select
                                defaultValue={3}
                                className='form-control '
                                onChange={(e) =>
                                    setCostAccountId(e.target.value)
                                }>
                                {costAccounts?.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                        <td className='tdleft'>
                            <label>Note</label>
                        </td>
                        <td>
                            <select
                                className='form-control'
                                defaultValue={1}
                                onChange={(e) =>
                                    setCostAccountItemId(e.target.value)
                                }>
                                {costAccountItems.length !== 0
                                    ? costAccountItems[0].costAccountItems?.map(
                                          (item) => {
                                              return (
                                                  <option
                                                      key={item.id}
                                                      value={item.id}>
                                                      {item.note}
                                                  </option>
                                              );
                                          },
                                      )
                                    : console.log('first')}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Requestor</label>
                        </td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        requester: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Department</label>
                        </td>
                        <td>
                            <select
                                defaultValue={1}
                                className='form-control'
                                onChange={(e) =>
                                    setDepartmentId(e.target.value)
                                }>
                                {departments?.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                        <td className='tdleft'>
                            <label>Note</label>
                        </td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        Note: e.target.value,
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
                    onClick={handleExport}>
                    Export Material
                </button>
            </div>
        </>
    );
}

export default ExportMaterial;
