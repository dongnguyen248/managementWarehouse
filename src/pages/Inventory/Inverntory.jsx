import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import { Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewMaterial from 'components/modals/inventory/NewMaterial';
import AddQuantity from 'components/modals/inventory/AddQuantity';
import InventorySearch from 'components/searchingForm/InventorySearch';
import './Inventory.css';
import EditMaterial from 'components/modals/inventory/EditMaterial';
import ViewTable from 'components/viewtable/ViewTable';
import ExportMaterial from 'components/modals/inventory/ExportMaterial';
import { getInventories } from 'services/inventoriesService';

export default function Inverntory() {
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataInventories, setDataInventories] = useState([]);
    const dispath = useDispatch();
    const { inventories } = useSelector((state) => state.inventories);
    console.log(inventories.items);
    useEffect(() => {
        dispath(getInventories({ currentPage, perPage }));
        inventories.items ? setLoading(false) : setLoading(true);
        setDataInventories(inventories.items);
        setTotalRows(inventories.totalRows);
    }, [dispath, currentPage, perPage, inventories.totalRows]);

    useEffect(() => {
        document.title = 'Inventory History';
    }, []);

    const [handleMaterial, setHandleMaterial] = useState({
        newMaterial: false,
        addQuantity: false,
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
                name: 'Area',
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
                name: 'Remark',
                selector: (row) => row.remark,
            },

            {
                cell: (row) => (
                    <button
                        className='btn btn-primary btn-sm'
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
    const handleAddQuantity = () => {
        !itemSelected.length
            ? swal('Please select an  item!')
            : setHandleMaterial({ addQuantity: true });
    };
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
                        className='btn btn-primary btn-sm button__export'>
                        Export Excel
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-sm button__export'
                        onClick={() =>
                            setHandleMaterial({ newMaterial: true })
                        }>
                        New Material
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-sm button__export'
                        onClick={handleAddQuantity}>
                        Add Quantity
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-sm button__export'
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
                    progressPending={loading}
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
                show={handleMaterial.addQuantity}
                onHide={() => setHandleMaterial(handleMaterial.addQuantity)}
                aria-labelledby='add-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='add-modal-sizes-title-lg'>
                        Add Quantity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddQuantity data={itemSelected} />
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
