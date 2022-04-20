import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import {
    reportExcel,
    exportExcelHistoriesExport,
    getAllExportHistories,
} from 'services/exportHistoriesService';
import { getLineReciever } from 'services/inventoriesService';

function ImportHistorySearch() {
    var date = new Date();
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser,
    );
    const [lineSelect, setLineSelect] = useState();
    const [startDate, setStartDate] = useState(
        new Date(date.getFullYear(), date.getMonth(), 1),
    );
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();
    const { exportHistories } = useSelector((state) => state.exportHistories);

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

    const { line } = useSelector((state) => state.line);

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
                        placeholder='Enter start day'
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
                        placeholder='Enter end day'
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='item'>
                        Item:
                    </label>
                    <input
                        type='text'
                        id='item'
                        className='form-control'
                        placeholder='Enter Item'
                        onChange={(e) =>
                            setItem({ ...item, item: e.target.value })
                        }
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label
                        className='form-label d-flex flex-column justify-content-center'
                        htmlFor='accountcost'>
                        AccountCost:
                    </label>
                    <input
                        type='text'
                        id='accountcost'
                        className='form-control'
                        placeholder='Enter ponumber'
                        onChange={(e) =>
                            setItem({ ...item, item: e.target.value })
                        }
                    />
                </div>
                <div className='form-outline  ms-2 me-1 d-flex '>
                    <label>Receiver</label>

                    <label>
                        <select
                            className='form-control'
                            onChange={(e) =>
                                setLineSelect({
                                    LineRequest: e.target.value,
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
                    </label>
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
