import React from "react";
import DataTable from "react-data-table-component";
// import Header from "../../components/Header/Header";
import Header from "components/header/Header";



import Checkbox from "@material-ui/core/Checkbox";
// import Checkbox from "../../components/checkbox/Checkbox";

export default function ImportHistory() {
    const columns = [
        {
            name: "Qcode",
            selector: (row) => row.zone,
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
            name: "Import Date",
            selector: (row) => row.unit,
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
        },
        {
            name: "Price",
            selector: (row) => row.price,
        },
        {
            name: "PO Number",
            selector: (row) => row.ponumber,
        },
        {
            name: "Supplier",
            selector: (row) => row.supplier,
        },
        {
            name: "Buyer",
            selector: (row) => row.buyer,
        },
        {
            name: "Requester",
            selector: (row) => row.requester,
        },
        {
            name: "Locator",
            selector: (row) => row.locator,
        },
        {
            name: "Remark",
            selector: (row) => row.remark,
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
            ponumber:37682-9,
            supplier:"HƯNG THỊNH",
            buyer:"Nguyễn Thị Thu",
            requester:"PACKING 1",
            locator: "QMA01.WH1-BOLT",
            remark: "",
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
                  <h1 className="header__list">Import History List</h1>
                  <DataTable
                      columns={columns}
                      data={data}
                      selectableRows
                      selectableRowsComponent={Checkbox}
                  />
                  ;
              </div>
          </>
    )
  }