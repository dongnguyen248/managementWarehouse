import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Header from "../../components/header/Header";
import Checkbox from "@material-ui/core/Checkbox";
// import Checkbox from "../../components/checkbox/Checkbox";
import "./Inventory.css";
export default function Inverntory() {
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

    const data = [
        {
            id: 1,
            title: "Year",
            zone: "MAIN WAREHOUSE",
            location: "KÊ BOLT",
            qcode: "Q4356383",
            item: "Bolt M45xP4.5x235Lx145Sx60S,RH,12.9,HRC",
            spec: "Bolt M45xP4.5x235Lx145Sx60S,RH,12.9,HRC 30~35, DWG NO: VST12ZRMC010,FOR COIL CAR #1ZRM",
            unit: "set",
            quantity: 10,
            price: 34.51,
            remark: "",
            locator: "QMA01.WH1-BOLT",
        },
        {
            id: 2,
            title: "Year",
            year: "1984",
        },
    ];
    return (
        <>
            <Header />
            <div className="swrap">
                <h1>Inventory List</h1>
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    selectableRowsComponent={Checkbox}
                />
                ;
            </div>
        </>
    );
}
