import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './InventoryModals.css';
function AddQuantity() {
    const handleAddQuantity = () => {
        console.log('first');
    };
    const [quantity, setQuantity] = useState({
        qCode: '',
        inputDate: new Date(),
        quantity: '',
        price: '',
        poNumber: '',
        supplier: '',
        buyer: '',
        requester: '',
        received: false,
        locator: '',
        checked: false,
        datecheck: '',
        checker: '',
        checkResult: '',
    });
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
                                    setQuantity({
                                        ...quantity,
                                        qCode: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Input Date</label>
                        </td>
                        <td>
                            <DatePicker
                                className='form-control'
                                selected={quantity.inputDate}
                                onChange={(date: Date) =>
                                    setQuantity({
                                        ...quantity,
                                        checkedDate: date,
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
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        quantity: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Price</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        price: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>PO Number</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
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
                                    setQuantity({
                                        ...quantity,
                                        supplier: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Buyer</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
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
                            <label>Requester</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        requester: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Received</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        received: e.target.checked,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Locator</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        locator: e.target.value,
                                    })
                                }
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
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        checked: e.target.checked,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Date Check</label>
                        </td>
                        <td>
                            <DatePicker
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        datecheck: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Checker</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        checker: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Check Result</label>
                        </td>
                        <td>
                            <input
                                onChange={(e) =>
                                    setQuantity({
                                        ...quantity,
                                        checkResult: e.target.value,
                                    })
                                }
                                type='text'
                                className='form-control'
                            />
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
