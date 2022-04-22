import { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
function EditMaterial({ data }) {
    console.log(data);
    const [material, setMaterial] = useState({});
    const handleSubmit = () => {
        console.log('first');
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
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Export Date</label>
                        </td>
                        <td>
                            <DatePicker
                                className='form-control'
                                dateFormat='yyyy-MM-dd'
                                selected={moment(data.exportDate).toDate()}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='tdleft'>
                            <label>Quantity</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.quantity}
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
                                defaultValue={data.price}
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
                                defaultValue={data.poNumber}
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
                                defaultValue={data.buyer}
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
                                defaultValue={data.requester}
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr>
                    {/* <tr>
                        <td className='tdleft'>
                            <label>Received</label>
                        </td>
                        <td>
                            <input
                                defaultValue={(data.received = true)}
                                type='text'
                                className='form-control'
                            />
                        </td>
                    </tr> */}
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
