import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { searchImportHistory } from 'services/importHistoriesService';
import moment from 'moment';
function ImportHistorySearch() {
    var date = new Date();
    const dispath = useDispatch();
    const [startDate, setStartDate] = useState(
        new Date(date.getFullYear(), date.getMonth(), 1),
    );
    const [endDate, setEndDate] = useState(new Date());
    const { importHistories } = useSelector((state) => state.importHistories);
    const [item, setItem] = useState({
        dateFrom: moment.utc(startDate).local().format('YYYY-MM-DD'),
        dateTo: moment.utc(endDate).local().format('YYYY-MM-DD'),
        qCode: '',
        Po: '',
        Line: '',
        Supplier: '',
    });
    const hanleSearchItem = () => {
        let option = '/search?';
        let condition = [];
        if (item.qCode.length !== 0) {
            condition.push(`qcode=${item.qCode}`);
        }
        if (item.dateFrom.length !== 0) {
            condition.push(`dateFrom=${item.dateFrom}`);
        }
        if (item.dateTo.length !== 0) {
            condition.push(`dateTo=${item.dateTo}`);
        }
        if (item.Line.length !== 0) {
            condition.push(`Line=${item.Line}`);
        }
        if (item.Po.length !== 0) {
            condition.push(`Po=${item.Po}`);
        }
        if (item.Supplier.length !== 0) {
            condition.push(`Supplier=${item.Supplier}`);
        }
        for (let index = 0; index < condition.length; index++) {
            if (index === 0) {
                option += condition[index];
            } else {
                option += `&${condition[index]}`;
            }
        }
        if (condition.length === 0) {
            return;
        }
        dispath(
            searchImportHistory({
                option,
                currentPage: importHistories.pageIndex,
                perPage: importHistories.pageSize,
            }),
        );
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
                        To:
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
                        onChange={(e) =>
                            setItem({
                                ...item,
                                qCode: e.target.value,
                            })
                        }
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
                        onChange={(e) =>
                            setItem({
                                ...item,
                                Po: e.target.value,
                            })
                        }
                    />
                </div>

                <div className='form-check'>
                    <label
                        className='form-check-label me-4'
                        htmlFor='flexCheckDefault'>
                        Received
                    </label>
                    <input
                        className='form-check-input float-md-end'
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
                        onChange={(e) =>
                            setItem({
                                ...item,
                                Line: e.target.value,
                            })
                        }
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
                        onChange={(e) =>
                            setItem({
                                ...item,
                                Supplier: e.target.value,
                            })
                        }
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
                    ExcelReport
                </button>
            </form>
        </>
    );
}

export default ImportHistorySearch;
