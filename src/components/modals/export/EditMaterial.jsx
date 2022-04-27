import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { updateExportHistory } from 'services/exportHistoriesService';
import swal from 'sweetalert';

function EditMaterial({ data }) {
    const dispatch = useDispatch();

    const userId = useSelector(
        (state) => state.persistedReducer.user.currentUser.employee.id,
    );
    const [exportValue, setExportValue] = useState(0);
    const { line } = useSelector((state) => state.line);
    const { departments } = useSelector((state) => state.departments);
    const { costAccounts } = useSelector((state) => state.costAccounts);

    const lineId = line?.filter((item) => item.name === data.line);

    const costAccoustSelected = costAccounts?.filter(
        (c) => c.name === data.costAccount,
    );
    const departmentSelected = departments?.filter(
        (d) => d.name === data.department,
    );
    const [costAccountItems, setCostAccountItems] = useState([]);
    const [constAccoutItemId, setCostAccountItemId] = useState(1);

    const [material, setMaterial] = useState({
        outputDate: data.exportDate,
        line: 63,
        accCode: '',
        requester: '',
        Note: '',
        costAccountId: costAccoustSelected[0].id,
        departmentId: departmentSelected[0].id,
    });
    useEffect(() => {
        setCostAccountItems(
            costAccounts?.filter((c) => {
                return c.id === material.costAccountId;
            }),
        );
    }, []);
    const handleSubmit = () => {
        dispatch(
            updateExportHistory({
                Id: data.id,
                ExportDate: material.outputDate,
                Quantity: exportValue,
                Requestor: material.requester,
                Department: material.departmentId,
                costAccount: material.costAccountId,
                costAccountItem: constAccoutItemId,
                Remart: material.Note,
                Receiver: material.line,
                Handler: userId,
                Price: data.price,
                InventoriesBefor: data.inventoriesBefor - exportValue,
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
                                dateFormat='yyyy-MM-dd'
                                className='form-control'
                                selected={moment(material.outputDate).toDate()}
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
                                defaultValue={data.inventoriesBefor}
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
                                defaultValue={data.quantity}
                                type='text'
                                className='form-control'
                                onChange={(e) => {
                                    let minusInventories =
                                        data.inventoriesBefor - e.target.value;
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
                                defaultValue={lineId.id}
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
                                defaultValue={costAccoustSelected[0]?.id}
                                className='form-control '
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        costAccountId: e.target.value,
                                    })
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
                                defaultValue={data.requestor}
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
                                defaultValue={departmentSelected[0].id}
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        departmentId: e.target.value,
                                    })
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
                    onClick={handleSubmit}>
                    Save Material
                </button>
            </div>
        </>
    );
}

export default EditMaterial;
