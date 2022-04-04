import { useCallback, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import ImportHistorySearch from 'components/searchingForm/ImportHistorySearch';
import dataImport from './dataImport';
import EditMaterial from 'components/modals/Import/EditMaterial';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getImportHistories } from 'services/importHistoriesService';

export default function ImportHistory() {
    const [editMaterial, setEditMaterial] = useState(false);
    const [materialSelect, setMaterialSelect] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataImportHistories, setDataImportHistories] = useState([]);
    const dispath = useDispatch();
    const { importHistories } = useSelector((state) => state.importHistories);
    useEffect(() => {
        document.title = 'Import History';
    }, []);
    useEffect(() => {
        dispath(getImportHistories({ currentPage, perPage }));
        setTotalRows(importHistories.totalRows);
    }, [currentPage, perPage]);
    const handleDelete = useCallback(
        (row) => async () => {
            console.log(row);
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
            name: 'Qcode',
            selector: (row) => row.qCode,
            grow: 0.3,
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
            name: 'Import Date',
            selector: (row) => row.lastImportDate,
            grow: 1,
            wrap: true,
        },

        {
            name: 'Price',
            selector: (row) => row.price,
            grow: 0.3,
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
                <div>
                    <button
                        className='btn me-2 btn-primary btn-sm'
                        onClick={handleEdit(row)}>
                        Edit
                    </button>

                    <button
                        className='btn btn-danger  btn-sm'
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
                    pagination
                    highlightOnHover
                />
                ;
            </div>
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
