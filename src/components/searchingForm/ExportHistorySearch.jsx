import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import {
    reportExcel,
    exportExcelHistoriesExport,
} from 'services/exportHistoriesService';

function ImportHistorySearch() {
    var date = new Date();
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser,
    );
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(
        new Date(date.getFullYear(), date.getMonth(), 1),
    );
    const [endDate, setEndDate] = useState(new Date());
    const [item, setItem] = useState({
        fromDate: startDate,
        toDate: endDate,
        Qcode: '',
        Po: '',
        Line: '',
        Suplier: '',
    });
    const hanleSearchItem = () => {
        console.log('first');
    };
    const hanleExportExcel = () => {
        dispatch(exportExcelHistoriesExport({ startDate, endDate }));
    };
    const hanleReportExcel = () => {
        dispatch(reportExcel({ startDate, endDate }));
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
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='formspec'>
                        Spec:
                    </label>
                    <input
                        type='text'
                        id='formspec'
                        className='form-control'
                        placeholder='Enter spec'
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
                    disabled={user == null}
                    onClick={hanleExportExcel}>
                    Excel Export
                </button>
                <button
                    type='button'
                    className='btn btn-primary btn-sm button__export'
                    disabled={user == null}
                    onClick={hanleReportExcel}>
                    Excel Report
                </button>
            </form>
        </>
    );
}

export default ImportHistorySearch;
