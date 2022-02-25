import { useState } from "react";
import "./ImportMaterial.css";
export default function ImportMaterial() {
    const [qcode,setQcode] = useState("");
    const [area,setArea] = useState("");
    const [location,setLocation] = useState("");
    const [item,setItem] = useState("");
    // const [qcode,setQcode] = useState("");
    // const [qcode,setQcode] = useState("");
    // const [qcode,setQcode] = useState("");
    // const [qcode,setQcode] = useState("");
    // const [qcode,setQcode] = useState("");
    // const [qcode,setQcode] = useState("");

    return (
        <>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td className="tdleft">
                            <label>QCode</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td className="tdleft">
                            <label>Area</label>
                        </td>
                        <td>
                            <select className="form-control">
                                <option value="-1"></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Location</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td className="tdleft">
                            <label>Item</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Specification</label>
                        </td>
                        <td>
                            <textarea className="form-control"></textarea>
                        </td>
                        <td className="tdleft">
                            <label>Unit</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                required="required"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Quantity</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                required="required"
                            />
                        </td>
                        <td className="tdleft">
                            <label>Price (USD)</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                required="required"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Input Date</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                required="required"
                            />
                        </td>
                        <td className="tdleft">
                            <label>PO Number</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Supplier</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td className="tdleft">
                            <label>Buyer</label>
                        </td>
                        <td>
                            <select className="form-control">
                                <option></option>
                                <option>Nguyễn Ngọc Lãm </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Reciver</label>
                        </td>
                        <td>
                            <label>
                                <select className="form-control">
                                    <option>5 S</option>
                                </select>
                            </label>
                        </td>
                        <td className="tdleft">
                            <label>Remark</label>
                        </td>
                        <td>
                            <textarea
                                className="form-control"
                                rows="2"
                            ></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td className="tdleft">
                            <label>Checked</label>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name="chkinpection"
                            />
                        </td>

                        <td className="tdleft">
                            <label>Check Date</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Checker</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>

                        <td className="tdleft">
                            <label>Check Result</label>
                        </td>
                        <td>
                            <input className="form-control" />
                            <datalist>
                                <option>ACCEPT</option>
                                <option>RETURN</option>
                            </datalist>
                        </td>
                    </tr>

                    <tr>
                        <td className="tdleft">
                            <label>Locator</label>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td className="tdleft">
                            <label>Received</label>
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="col-md-12 text-center">
            <button type="button" className="btn btn-primary me-3">Save Material</button>
        </div>
        </>
    );
}
