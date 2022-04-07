import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import './InventoryModals.css';
function ExportMaterial({ data }) {
    const { line } = useSelector((state) => state.line);
    const { costAccounts } = useSelector((state) => state.costAccounts);
    const { departments } = useSelector((state) => state.departments);
    const [exportValue, setExportValue] = useState(0);
    const [departmentId, setDeparmentId] = useState(1);
    const [costAccountItems, setcostAccountItems] = useState([]);
    const [inventoriesss, setInventories] = useState(data[0].inventory);
    const [material, setMaterial] = useState({
        qCode: data[0].qCode,
        inputDate: data[0].lastImportDate,
        outputDate: new Date(),
        inventories: data[0].inventory,
        exportQuantity: exportValue,
        line: '',
        accCode: '',
        requester: '',
        dept: departmentId,
        Note: '',
    });
    useEffect(() => {
        setcostAccountItems(
            costAccounts.filter((c) => {
                return c.id == departmentId;
            }),
        );
    }, [departmentId]);
    const handleExport = () => {
        console.log(material);
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
                                defaultValue={material.qCode}
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
                                defaultValue={material.inputDate}
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
                                className='form-control '
                                defaultValue={departmentId}
                                onChange={(e) =>
                                    setDeparmentId(e.target.value)
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
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        Note: e.target.value,
                                    })
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
                            <label>Requester</label>
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
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        dept: e.target.value,
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
                    onClick={handleExport}>
                    Export Material
                </button>
            </div>
        </>
    );
}

export default ExportMaterial;
