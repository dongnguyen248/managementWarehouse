import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './InventoryModals.css';
function ExportMaterial({ data }) {
    console.log(data[0]);
    const [material, setMaterial] = useState({
        qCode: data[0].qcode,
        inputDate: data[0].inputdate,
        outputDate: new Date(),
        inventories: data[0].inventories,
        exportQuantity: '',
        line: '',
        accCode: '',
        requester: '',
        dept: '',
    });
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
                            <label>Input Date</label>
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
                            <label>Output Date</label>
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
                                defaultValue={data[0].inventories}
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
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        exportQuantity: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Line</label>
                        </td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        line: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Accountant Code</label>
                        </td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        accCode: e.target.value,
                                    })
                                }
                            />
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
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        dept: e.target.value,
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
