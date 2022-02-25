import DataTable from "react-data-table-component";
import Header from "components/header/Header";
// import Checkbox from "../../components/checkbox/Checkbox";
import Checkbox from "@material-ui/core/Checkbox";
// import Seach;
import exports from "./dataExport";
import { useEffect, useState } from "react";
import "./ExportHistory.css";

export default function ExportHistory() {
    const columns = [
        {
            name: "Zone",
            selector: (row) => row.zone,
        },
        {
            name: "Qcode",
            selector: (row) => row.qcode,
            sortable: true,
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

    const [historyep, setHistoryep] = useState(exports);

    const handleRowClicked = (row) => {
        const updatedData = historyep.map((item) => {
            if (row.id !== item.id) {
                return item;
            }
            return {
                ...item,
                toggleSelected: !item.toggleSelected,
            };
        });
        setHistoryep(updatedData);
    };

    const conditionalRowStyles = [
        {
            when: (row) => {
                if (row.id == 1) {
                    console.log(row);
                }
                return row.toggleSelected;
            },
            style: {
                backgroundColor: "green",
                userSelect: "none",
            },
        },
    ];

    return (
        <>
            <Header />
            <div className="swrap">
                <h1 className="header__list">Export History List</h1>
                <div className="d-flex justify-content-between">
                    <form className="d-flex ">
                        <div className="form-outline mb-4 ms-2 me-1 d-flex ">
                            <label
                                className="form-label d-flex flex-column justify-content-center"
                                htmlFor="formqcode"
                            >
                                Qcode:
                            </label>
                            <input
                                type="text"
                                id="formqcode"
                                className="form-control"
                                placeholder="Enter Qcode"
                            />
                        </div>
                        <div className="form-outline mb-4 ms-2 me-1 d-flex justify-content-center">
                            <label
                                className="form-label d-flex flex-column justify-content-center"
                                htmlFor="formzone"
                            >
                                Zone:
                            </label>
                            <input
                                type="text"
                                id="formZone"
                                className="form-control"
                                placeholder="Enter Zone"
                            />
                        </div>
                        <div className="form-outline mb-4 ms-2 me-1 d-flex justify-content-center">
                            <label
                                className="form-label d-flex flex-column justify-content-center"
                                htmlFor="formlocation"
                            >
                                Location:
                            </label>
                            <input
                                type="text"
                                id="formlocation"
                                className="form-control"
                                placeholder="Enter location"
                            />
                        </div>
                        <div className="form-outline mb-4 ms-2 me-1 d-flex justify-content-center">
                            <label
                                className="form-label d-flex flex-column justify-content-center"
                                htmlFor="formitem"
                            >
                                Item:
                            </label>
                            <input
                                type="text"
                                id="formitem"
                                className="form-control"
                                placeholder="Enter item"
                            />
                        </div>
                        <div className="form-outline mb-4 ms-2 me-1 d-flex justify-content-center">
                            <label
                                className="form-label d-flex flex-column justify-content-center"
                                htmlFor="formspec"
                            >
                                Specification:
                            </label>
                            <input
                                type="text"
                                id="formspec"
                                className="form-control"
                                placeholder="Enter spec"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary button__export"
                        >
                            Search
                        </button>
                    </form>
                    <div className="me-2">
                        <button
                            type="button"
                            className="btn btn-primary button__export"
                        >
                            Excel Report
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary button__export"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger button__export"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <DataTable
                    columns={columns}
                    data={exports}
                    selectableRows
                    selectableRowsSingle
                    selectableRowsComponent={Checkbox}
                    onRowClicked={handleRowClicked}
                    conditionalRowStyles={conditionalRowStyles}
                    pagination
                />
            </div>
        </>
    );
}
