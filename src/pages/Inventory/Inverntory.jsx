import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import { Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewMaterial from 'components/modals/inventory/NewMaterial';
// import AddQuantity from 'components/modals/inventory/AddQuantity';
import InventorySearch from 'components/searchingForm/InventorySearch';
import './Inventory.css';
import EditMaterial from 'components/modals/inventory/EditMaterial';
import ViewTable from 'components/viewtable/ViewTable';
import ExportMaterial from 'components/modals/inventory/ExportMaterial';
import {
    getArea,
    getInventories,
    getLineReciever,
    getUnit,
    getCostAccounts,
    getDepartment,
} from 'services/inventoriesService';

export default function Inverntory() {
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataInventories, setDataInventories] = useState([]);
    const [pending, setPending] = useState(true);

    const dispath = useDispatch();
    const { inventories } = useSelector((state) => state.inventories);
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser,
    );

    useEffect(() => {
        dispath(getLineReciever());
        dispath(getUnit());
        dispath(getArea());
        dispath(getCostAccounts());
        dispath(getDepartment());
    }, []);
    useEffect(() => {
        dispath(getInventories({ currentPage, perPage }));
        setTotalRows(inventories.totalRows);
        const timeout = setTimeout(() => {
            setPending(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [currentPage, perPage]);
    useEffect(() => {
        setDataInventories(inventories.items);
    }, [inventories.items]);

    useEffect(() => {
        document.title = 'Inventory History';
    }, []);

    const [handleMaterial, setHandleMaterial] = useState({
        newMaterial: false,
        exportMaterial: false,
        editMaterial: false,
    });
    const [materialEdit, setMaterialEdit] = useState({});
    const handleEdit = useCallback(
        (row) => async () => {
            setMaterialEdit(row);
            setHandleMaterial({ editMaterial: true });
        },
        [],
    );
    const columns = useMemo(
        () => [
            {
                name: 'Zone',
                selector: (row) => row.zone,
                grow: 0.5,
                wrap: true,
            },
            {
                name: 'Qcode',
                selector: (row) => row.qCode,
                grow: 0.5,
            },
            {
                name: 'Item',
                selector: (row) => row.item,
                wrap: true,
            },
            {
                name: 'Location',
                selector: (row) => row.location,
                grow: 0.5,
            },
            {
                name: 'Specification',
                selector: (row) => row.specification,
                wrap: true,
            },
            {
                name: 'Unit',
                grow: 0.3,
                selector: (row) => row.unit,
            },
            {
                name: 'Inventories',
                selector: (row) => row.inventory,
                grow: 0.5,
            },
            {
                name: 'Locator',
                selector: (row) => row.locator,
            },
            {
                cell: (row) => (
                    <button
                        className='btn btn-primary btn-sm'
                        disabled={user == null}
                        onClick={handleEdit(row)}>
                        Edit
                    </button>
                ),
                grow: 0.3,
            },
        ],
        [handleEdit],
    );
    const handlePageChange = (page) => {
        getInventories(page);
        setCurrentPage(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        getInventories(page, newPerPage);
        setPerPage(newPerPage);
    };

    const selectedRowStyle = [
        {
            when: (row) => row.toggleSelected,
            style: {
                backgroundColor: '#dff0d8',
                userSelect: 'none',
            },
        },
    ];

    const handleRowClicked = (row) => {
        const updatedData = dataInventories?.map((item) => {
            if (row.id !== item.id) {
                delete item.toggleSelected;
                return item;
            }
            return {
                ...item,
                toggleSelected: !item.toggleSelected,
            };
        });

        setDataInventories(updatedData);
    };
    const itemSelected = dataInventories?.filter(
        (item) => item.toggleSelected === true,
    );
    const hanldeExportMaterial = () => {
        !itemSelected.length
            ? swal('Please select an  item!')
            : setHandleMaterial({ exportMaterial: true });
    };
    const rowPreExpanded = (row) => row.defaultExpanded;
    return (
        <>
            <Header />
            <div className='swrap'>
                <h1 className='header__list'>Inventory List</h1>
                <div className='me-2 d-flex float-end'>
                    <button
                        type='button'
                        className='btn btn-primary btn-sm button__export'
                        disabled={user == null}>
                        Export Excel
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-sm button__export'
                        disabled={user == null}
                        onClick={() =>
                            setHandleMaterial({ newMaterial: true })
                        }>
                        New Material
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-sm button__export'
                        disabled={user == null}
                        onClick={hanldeExportMaterial}>
                        Export Material
                    </button>
                </div>
                <InventorySearch />
                <DataTable
                    columns={columns}
                    data={dataInventories}
                    onRowClicked={handleRowClicked}
                    conditionalRowStyles={selectedRowStyle}
                    expandableRows
                    expandableRowExpanded={rowPreExpanded}
                    expandableRowsComponent={ViewTable}
                    progressPending={pending}
                    paginationServer
                    paginationTotalRows={totalRows}
                    paginationDefaultPage={currentPage}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    highlightOnHover
                    pagination
                />
            </div>
            <Modal
                size='lg'
                show={handleMaterial.newMaterial}
                onHide={() => setHandleMaterial(handleMaterial.newMaterial)}
                aria-labelledby='new-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='new-modal-sizes-title-lg'>
                        New Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMaterial />
                </Modal.Body>
            </Modal>
            <Modal
                size='lg'
                show={handleMaterial.exportMaterial}
                onHide={() => setHandleMaterial(handleMaterial.exportMaterial)}
                aria-labelledby='export-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='export-modal-sizes-title-lg'>
                        Export Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExportMaterial data={itemSelected} />
                </Modal.Body>
            </Modal>
            <Modal
                size='lg'
                show={handleMaterial.editMaterial}
                onHide={() => setHandleMaterial(handleMaterial.editMaterial)}
                aria-labelledby='edit-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='edit-modal-sizes-title-lg'>
                        Edit Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditMaterial data={materialEdit} />
                </Modal.Body>
            </Modal>
        </>
    );
}
