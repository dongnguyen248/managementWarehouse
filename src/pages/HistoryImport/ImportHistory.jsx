import { useCallback, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import ImportHistorySearch from 'components/searchingForm/ImportHistorySearch';
import EditMaterial from 'components/modals/Import/EditMaterial';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteImportHistory,
    getImportHistories,
} from 'services/importHistoriesService';
import { getLineReciever } from 'services/inventoriesService';
import moment from 'moment';
import swal from 'sweetalert';
export default function ImportHistory() {
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser,
    );
    const [editMaterial, setEditMaterial] = useState(false);
    const [materialSelect, setMaterialSelect] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const { importHistories } = useSelector((state) => state.importHistories);
    useEffect(() => {
        dispatch(getLineReciever());
    }, []);
    useEffect(() => {
        document.title = 'Import History';
    }, []);
    useEffect(() => {
        dispatch(getImportHistories({ currentPage, perPage }));
        setTotalRows(importHistories.totalRows);
        const timeout = setTimeout(() => {
            setPending(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [currentPage, perPage]);
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
                    dispatch(deleteImportHistory(row.id));
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
            setMaterialSelect({ row });
        },
        [],
    );
    const handlePageChange = (page) => {
        getImportHistories(page);
        setCurrentPage(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        getImportHistories(page, newPerPage);
        setPerPage(newPerPage);
    };

    const columns = [
        {
            name: 'Qcode',
            selector: (row) => row.qCode,
            grow: 0.3,
        },
        {
            name: 'Import Date',
            selector: (row) => moment(row.lastImportDate).format('DD-MM-YYYY'),
            grow: 1,
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
            grow: 0.3,
            wrap: true,
        },
        {
            name: 'Specification',
            selector: (row) => row.specification,
            grow: 2,
            wrap: true,
        },

        {
            name: 'Price',
            selector: (row) => row.price,
            grow: 0.3,
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            wrap: true,
        },
        {
            name: 'PO Number',
            selector: (row) => row.po,
            grow: 1,
        },
        {
            name: 'Supplier',
            selector: (row) => row.supplier,
            wrap: true,
        },
        {
            name: 'Buyer',
            selector: (row) => row.buyer,
            wrap: true,
        },
        {
            name: 'Requester',
            selector: (row) => row.requester,
        },
        {
            name: 'Locator',
            selector: (row) => row.locator,
            wrap: true,
        },
        {
            name: 'Remark',
            selector: (row) => row.remark,
            wrap: true,
        },
        {
            cell: (row) => (
                <div className='d-flex flex-column'>
                    <button
                        className='btn mt-2 btn-primary btn-sm'
                        disabled={user == null}
                        onClick={handleEdit(row)}>
                        Edit
                    </button>

                    <button
                        className='btn mt-2 mb-2 btn-danger  btn-sm'
                        disabled={user == null}
                        onClick={handleDelete(row)}>
                        Delete
                    </button>
                </div>
            ),
            grow: 1,
        },
    ];

    return (
        <>
            <Header />
            <div className='swrap'>
                <h1 className='header__list'>Import History List</h1>
                <ImportHistorySearch />
                <DataTable
                    columns={columns}
                    data={importHistories.items}
                    progressPending={pending}
                    paginationTotalRows={totalRows}
                    paginationDefaultPage={currentPage}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    pagination
                    highlightOnHover
                />
            </div>
            <p className='text-center'>
                Total Import : {importHistories.total}
            </p>

            <Modal
                size='lg'
                show={editMaterial}
                onHide={() => setEditMaterial(false)}
                aria-labelledby='edit-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='edit-modal-sizes-title-lg'>
                        Edit Import Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditMaterial data={materialSelect} />
                </Modal.Body>
            </Modal>
        </>
    );
}
