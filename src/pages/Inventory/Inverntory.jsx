import DataTable from "react-data-table-component";
import Header from "../../components/header/Header";
import { Modal } from "react-bootstrap";
import swal from 'sweetalert';
import { useState, useEffect, useCallback } from "react";
import NewMaterial from "components/modals/NewMaterial";
import AddQuantity from "components/modals/AddQuantity";
import InventorySearch from "components/searchingForm/InventorySearch";
import "./Inventory.css";
import inventories from "./datainventory";

export default function Inverntory() {
    const [newMaterial, setNewMaterial] = useState(false);
    const [addQuantity, setAddQuantity] = useState(false);
    const [exportMaterial, setExportMaterial] = useState(false);
    const [dataInventories, setDataInventories] = useState(inventories);

    const columns = [
        {
            name: "Zone",
            selector: (row) => row.zone,
            grow: 0.5,
            wrap: true,
        },
        {
            name: "Qcode",
            selector: (row) => row.qcode,
            grow: 0.5,
        },
        {
            name: "Item",
            selector: (row) => row.item,
            wrap: true,
        },
        {
            name: "Location",
            selector: (row) => row.location,
            grow: 0.5,
        },
        {
            name: "Specification",
            selector: (row) => row.spec,
            wrap: true,
        },
        {
            name: "Unit",
            grow: 0.3,
            selector: (row) => row.unit,
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
            grow: 0.3,
        },
        {
            name: "Locator",
            selector: (row) => row.locator,
        },
        {
            name: "Remark",
            selector: (row) => row.remark,
        },

        {
            cell: (row) => (
                <button
                    className="btn btn-primary btn-sm"
                    onClick={handleEdit(row)}
                >
                    Edit
                </button>
            ),
            grow: 0.3,
            // cell: row => <button onClick={handleEdit(row)}>Edit</button>
        },
    ];
    const handleEdit = useCallback((row) => async () => {
        console.log(row);
    });
    const selectedRowStyle = [
        {
            when: (row) => row.toggleSelected,
            style: {
                backgroundColor: "#dff0d8",
                userSelect: "none",
            },
        },
    ];

    const handleRowClicked = (row) => {
        const updatedData = dataInventories.map((item) => {
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
    const itemSelected = dataInventories.filter(
        (item) => item.toggleSelected === true
    );
    const handleAddQuantity = () => {
        !itemSelected.length ? swal("Please select an  item!") : setAddQuantity(true);;
    };
    const ExpandedComponent = (row) => {
        let data = row.data.qcode;
        return <>{row.data.qcode}</>;
    };    
    return (
        <>
            <Header />
            <div className="swrap">
                <h1 className="header__list">Inventory List</h1>
                <div className="me-2 d-flex float-end">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm button__export"
                    >
                        Export Excel
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm button__export"
                        onClick={() => setNewMaterial(true)}
                    >
                        New Material
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm button__export"
                        onClick={handleAddQuantity}
                    >
                        Add Quantity
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm button__export"
                        onClick={() => setExportMaterial(true)}
                    >
                        Export Material
                    </button>
                </div>
                <InventorySearch />
                <DataTable
                    columns={columns}
                    data={dataInventories}
                    expandableRows
                    onRowClicked={handleRowClicked}
                    expandableRowExpanded={(row) => row.defaultExpanded}
                    conditionalRowStyles={selectedRowStyle}
                    expandableRowsComponent={ExpandedComponent}
                    pagination
                />
            </div>
            <Modal
                size="lg"
                show={newMaterial}
                onHide={() => setNewMaterial(false)}
                aria-labelledby="new-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="new-modal-sizes-title-lg">
                        New Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMaterial />
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={addQuantity}
                onHide={() => setAddQuantity(false)}
                aria-labelledby="add-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="add-modal-sizes-title-lg">
                        Add Quantity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddQuantity data={itemSelected} />
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={exportMaterial}
                onHide={() => setExportMaterial(false)}
                aria-labelledby="export-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="export-modal-sizes-title-lg">
                        Export Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
}
