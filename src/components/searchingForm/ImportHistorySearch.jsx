import { useState } from 'react';
import DatePicker from 'react-datepicker';
function ImportHistorySearch() {
    var date = new Date();
    const [startDate, setStartDate] = useState(
        new Date(date.getFullYear(), date.getMonth(), 1),
    );
    const [endDate, setEndDate] = useState(new Date());
    const hanleSearchItem = () => {
        console.log('first');
    };
    const hanleReportExcel = () => {
        console.log('second');
    };
    return (
        <>
            <form className='d-flex mb-2 align-items-center'>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formstart'>
                        From:
                    </label>
                    <DatePicker
                        dateFormat='yyyy-MM-dd'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        type='text'
                        id='formstart'
                        className='form-control'
                        placeholder='Enter Qcode'
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formend'>
                        From:
                    </label>
                    <DatePicker
                        dateFormat='yyyy-MM-dd'
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        type='text'
                        id='formend'
                        className='form-control'
                        placeholder='Enter Qcode'
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
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
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formponumber'>
                        PO:
                    </label>
                    <input
                        type='text'
                        id='formponumber'
                        className='form-control'
                        placeholder='Enter ponumber'
                    />
                </div>

                <div className='form-check'>
                    <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault'>
                        Received
                    </label>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formline'>
                        Line:
                    </label>
                    <input
                        type='text'
                        id='formline'
                        className='form-control'
                        placeholder='Enter line'
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formsupplier'>
                        Supplier:
                    </label>
                    <input
                        type='text'
                        id='formsupplier'
                        className='form-control'
                        placeholder='Enter supplier'
                    />
                </div>

                <button
                    type='button'
                    className='btn btn-primary btn-sm button__export'
                    onClick={hanleSearchItem}>
                    Search
                </button>
                <button
                    type='button'
                    className='btn btn-primary btn-sm button__export'
                    onClick={hanleReportExcel}>
                    ReportExcel
                </button>
            </form>
        </>
    );
}

export default ImportHistorySearch;
