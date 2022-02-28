import { useState } from 'react';
import './InventoryModals.css';
function AddQuantity() {
    const handleAddQuantity = () => {
        console.log('first');
    };
    const [quantity, setQuantity] = useState({
        qCode: '',
        inputDate: new Date(),
        quantity: '',
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
                                    setMaterial({
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
