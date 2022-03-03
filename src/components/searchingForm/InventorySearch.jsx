import { useState } from 'react';

export default function InventorySearch() {
    const [item, setItem] = useState({
        qCode: '',
        area: '',
        location: '',
        item: '',
        spec: '',
    });
    const hanleSearchQcode = () => {
        console.log(item);
    };
    return (
        <>
            <form className='d-flex mb-2'>
                <div className='form-outline ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formqcode'>
                        Qcode:
                    </label>
                    <input
                        type='text'
                        id='formqcode'
                        className='form-control'
                        placeholder='Enter Qcode'
                        onChange={(e) =>
                            setItem({ ...item, qCode: e.target.value })
                        }
                    />
                </div>
                <div className='form-outline ms-2 me-1 d-flex justify-content-center'>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formzone'>
                        Area:
                    </label>
                    <input
                        type='text'
                        id='formZone'
                        className='form-control'
                        placeholder='Enter Area'
                        onChange={(e) =>
                            setItem({ ...item, area: e.target.value })
                        }
                    />
                </div>
                <div className='form-outline ms-2 me-1 d-flex justify-content-center'>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formlocation'>
                        Location:
                    </label>
                    <input
                        type='text'
                        id='formlocation'
                        className='form-control'
                        placeholder='Enter location'
                        onChange={(e) =>
                            setItem({ ...item, location: e.target.value })
                        }
                    />
                </div>
                <div className='form-outline ms-2 me-1 d-flex justify-content-center'>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formitem'>
                        Item:
                    </label>
                    <input
                        type='text'
                        id='formitem'
                        className='form-control'
                        placeholder='Enter item'
                        onChange={(e) =>
                            setItem({ ...item, item: e.target.value })
                        }
                    />
                </div>
                <div className='form-outline ms-2 me-1 d-flex justify-content-center'>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formspec'>
                        Specification:
                    </label>
                    <input
                        type='text'
                        id='formspec'
                        className='form-control'
                        placeholder='Enter spec'
                        onChange={(e) =>
                            setItem({ ...item, spec: e.target.value })
                        }
                    />
                </div>
                <button
                    type='button'
                    className='btn btn-primary button__export'
                    onClick={hanleSearchQcode}>
                    Search
                </button>
            </form>
        </>
    );
}
