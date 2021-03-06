import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import { useCallback, useEffect, useState } from 'react';
import './ExportHistory.css';
import ExportHistorySearch from 'components/searchingForm/ExportHistorySearch';
import EditMaterial from 'components/modals/export/EditMaterial';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import swal from 'sweetalert';
import {
    getExportHistories,
    deleteExportHistory,
} from 'services/exportHistoriesService';

import {
    getArea,
    getCostAccounts,
    getDepartment,
    getLineReciever,
    getUnit,
} from 'services/inventoriesService';

export default function ExportHistory() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLineReciever());
        dispatch(getUnit());
        dispatch(getArea());
        dispatch(getCostAccounts());
        dispatch(getDepartment());
    }, []);
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser,
    );
    const [pending, setPending] = useState(true);
    const [totalRows, setTotalRows] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [editMaterial, setEditMaterial] = useState(false);
    const [materialSelect, setMaterialSelect] = useState([]);
    const { exportHistories } = useSelector((state) => state.exportHistories);

    useEffect(() => {
        dispatch(getExportHistories({ currentPage, perPage }));
        setTotalRows(exportHistories.totalRows);
        const timeout = setTimeout(() => {
            setPending(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [currentPage, perPage]);
    const handlePageChange = (page) => {
        getExportHistories(page);
        setCurrentPage(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        getExportHistories(page, newPerPage);
        setPerPage(newPerPage);
    };
    const handleDelete = useCallback(
        (row) => async () => {
            swal({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                icon: 'warning',
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteExportHistory(row.id));
                    swal('Poof! Your imaginary file has been deleted!', {
                        icon: 'success',
                    });
                } else {
                    swal('Your imaginary file is safe!');
                }
            });
        },
        [],
    );
    const handleEdit = useCallback(
        (row) => async () => {
            setEditMaterial(true);
            setMaterialSelect(row);
        },
        [],
    );

    const columns = [
        {
            name: 'Zone',
            selector: (row) => row.zone,
            wrap: true,
        },
        {
            name: 'Export Date',
            selector: (row) => moment(row.exportDate).format('DD-MM-YYYY'),
            grow: 1,
            wrap: true,
        },
        {
            name: 'Qcode',
            selector: (row) => row.qCode,
            grow: 0.5,
            wrap: true,
        },

        {
            name: 'Item',
            selector: (row) => row.item,
            wrap: true,
        },
        {
            name: 'Location',
            selector: (row) => row.location,
        },
        {
            name: 'Specification',
            selector: (row) => row.specification,
            wrap: true,
            grow: 2,
        },
        {
            name: 'Unit',
            selector: (row) => row.unit,
            grow: 0.3,
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            grow: 0.3,
        },
        {
            name: 'Line',
            selector: (row) => row.line,
            grow: 0.5,
        },
        {
            name: 'Line Code',
            selector: (row) => row.costLine,
            grow: 1,
        },
        {
            name: 'Accountant Code',
            selector: (row) => row.costAccount,
            grow: 1,
        },
        {
            name: 'Remark',
            selector: (row) => row.remark,
        },
        {
            name: 'Locator',
            selector: (row) => row.locator,
            wrap: true,
        },
        {
            cell: (row) => (
                <div className='d-flex flex-column'>
                    <button
                        className='btn mb-2 mt-2 btn-primary btn-sm'
                        disabled={user == null}
                        onClick={handleEdit(row)}>
                        Edit
                    </button>

                    <button
                        className='btn mb-2 btn-danger btn-sm'
                        disabled={user == null}
                        onClick={handleDelete(row)}>
                        Delete
                    </button>
                </div>
            ),
            grow: 1,
        },
    ];

    // const handleRowClicked = (row) => {
    //     const updatedData = exportHistories?.map((item) => {
    //         if (row.id !== item.id) {
    //             delete item.toggleSelected;
    //             return item;
    //         }
    //         return {
    //             ...item,
    //             toggleSelected: !item.toggleSelected,
    //         };
    //     });
    //     // setDataExportHistories(updatedData);
    // };

    const conditionalRowStyles = [
        {
            when: (row) => row.toggleSelected,
            style: {
                backgroundColor: '#dff0d8',
                userSelect: 'none',
            },
        },
    ];

    return (
        <>
            <Header />
            <div className='swrap'>
                <h1 className='header__list'>Export History List</h1>
                <ExportHistorySearch />
                <DataTable
                    columns={columns}
                    progressPending={pending}
                    data={exportHistories.items}
                    paginationTotalRows={totalRows}
                    paginationDefaultPage={currentPage}
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pagination
                />
            </div>
            <p className='text-center'>
                Total Export : {exportHistories.total}
            </p>
            <Modal
                size='lg'
                show={editMaterial}
                onHide={() => setEditMaterial(false)}
                aria-labelledby='edit-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='edit-modal-sizes-title-lg'>
                        Edit Export Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditMaterial data={materialSelect} />
                </Modal.Body>
            </Modal>
        </>
    );
}
