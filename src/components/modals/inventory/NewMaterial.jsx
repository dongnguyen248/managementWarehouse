import { useState } from 'react';
import './InventoryModals.css';
import DatePicker from 'react-datepicker';
import React from 'react';

const ImportMaterial = () => {
    const [material, setMaterial] = useState({
        inputDate: new Date(),
        checkedDate: new Date(),
        qCode: '',
        area: '',
        location: '',
        item: '',
        spec: '',
        unit: '',
        quantity: 0,
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
                            <select className='form-control'>
                                <option className='form-control'>
                                    MAIN WAREHOUSE
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Location</label>
                        </td>
                        <td>
                            <input
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
                                        spec: e.target.value,
                                    })
                                }
                                className='form-control'></textarea>
                        </td>
                        <td className='tdleft'>
                            <label>Unit</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        unit: e.target.value,
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
