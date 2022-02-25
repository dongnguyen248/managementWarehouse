import DataTable from "react-data-table-component";
import Header from "../../components/header/Header";
import Checkbox from "@material-ui/core/Checkbox";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import NewMaterial from "components/modals/NewMaterial";
import InventorySearch from "components/searchingForm/InventorySearch";
import "./Inventory.css";
import inventory from "./datainventory";
export default function Inverntory() {
    const [newmaterial, setNewMaterial] = useState(false);
    const [addquantity, setAddQuantity] = useState(false);
    const [exportmaterial, setExportMaterial] = useState(false);
    const columns = [
        {
            name: "Zone",
            selector: (row) => row.zone,
        },
        {
            name: "Qcode",
            selector: (row) => row.qcode,
        },
        {
            name: "Item",
            selector: (row) => row.item,
        },
        {
            name: "Location",
            selector: (row) => row.location,
        },
        {
            name: "Specification",
            selector: (row) => row.spec,
        },
        {
            name: "Unit",
            selector: (row) => row.unit,
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
        },
        {
            name: "Remark",
            selector: (row) => row.remark,
        },
        {
            name: "Locator",
            selector: (row) => row.locator,
        },
    ];

    return (
        <>
            <Header />
            <div className="swrap">
                <h1 className="header__list">Inventory List</h1>
                <div className="me-2 d-flex float-end">
                    <button
                        type="button"
                        className="btn btn-primary button__export"
                        onClick={() => setNewMaterial(true)}
                    >
                        New Material
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary button__export"
                        onClick={() => setAddQuantity(true)}
                    >
                        Add Quantity
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary button__export"
                        onClick={() => setExportMaterial(true)}
                    >
                        Export Material
                    </button>
                </div>
               <InventorySearch/>
                <DataTable
                    columns={columns}
                    data={inventory}
                    selectableRowsSingle
                    selectableRows
                    selectableRowsComponent={Checkbox}
                    pagination
                />
            </div>
            <Modal
                size="lg"
                show={newmaterial}
                onHide={() => setNewMaterial(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        New Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <NewMaterial/>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={addquantity}
                onHide={() => setAddQuantity(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Quantity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={exportmaterial}
                onHide={() => setExportMaterial(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Export Material
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
}
