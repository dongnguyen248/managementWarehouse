import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import './InventoryModals.css';
function AddQuantity({ data }) {
    const [quantity, setQuantity] = useState({
        qCode: data[0].qCode,
        inputDate: data[0].lastImportDate,
        quantity: '',
        price: '',
        poNumber: '',
        supplier: '',
        buyer: '',
        requester: '',
        received: false,
        locator: '',
        checked: false,
        checker: '',
        checkResult: '',
    });

    const handleAddQuantity = () => {
        console.log(quantity);
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
                                defaultValue={data[0].qcode}
                                type='text'
                                className='form-control '
                                disabled
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Import Date</label>
                        </td>
                        <td>
                            <DatePicker
                                className='form-control'
                                selected={quantity.inputDate}
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        inputDate: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Quantity</label>
                        </td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        quantity: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Price</label>
                        </td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        price: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>PO Number</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data[0].poNumber}
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        poNumber: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Supplier</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data[0].supplier}
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        supplier: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Buyer</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data[0].buyer}
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        buyer: e.target.value,
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
                                defaultValue={data[0].requester}
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        requester: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Received</label>
                        </td>
                        <td>
                            <input
                                defaultValue={(data[0].received = true)}
                                type='checkbox'
                                className='form-check-input'
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        received: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Locator</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data[0].locator}
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Checked</label>
                        </td>
                        <td>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        checked: e.target.value,
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
                                defaultValue={data[0].checker}
                                type='text'
                                className='form-control'
                                onChange={(e) => {
                                    setQuantity({
                                        ...quantity,
                                        checker: e.target.value,
                                    });
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Check Result</label>
                        </td>
                        <td>
                            <label>
                                <select
                                    className='form-control'
                                    onChange={(e) => {
                                        setQuantity({
                                            ...quantity,
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
                </tbody>
            </table>
            <div className='col-md-12 text-center'>
                <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={handleAddQuantity}>
                    Save Material
                </button>
            </div>
        </>
    );
}

export default AddQuantity;
