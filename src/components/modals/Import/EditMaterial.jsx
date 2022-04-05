import { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { updateImportHistory } from "services/importHistoriesService";

function EditMaterial({ data }) {
    const dispatch = useDispatch();
    const { line } = useSelector((state) => state.line);
    const lineId = line?.filter((item) => item.name === data.requester);
    console.log(lineId)
    const [material, setMaterial] = useState({
        remark: data.remark,
        line: lineId[0].id,
        price: data.price,
        buyer: data.buyer,
        poNumber: data.po,
        supplier: data.supplier,
        received: data.received,
    });

    const handleSubmit = () => {
        dispatch(
            updateImportHistory({
                qCode: data.qCode,
                remark: material.remark,
                importHistory: {
                    id: data.id,
                    LineRequest: material.line,
                    Buyer: material.buyer,
                    Po: material.poNumber,
                    supplier: material.supplier,
                    Allocated: material.received,
                    price: material.price,
                },
            })
        );
    };
    return (
        <>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td className="tdleft">
                            <label>QCode</label>
                        </td>
                        <td>
                            <input
                                disabled
                                defaultValue={data.qCode}
                                type="text"
                                className="form-control"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Input Date</label>
                        </td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                disabled
                                defaultValue={data.lastImportDate}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="tdleft">
                            <label>Price</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.price}
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        price: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>PO Number</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.po}
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        poNumber: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Supplier</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.supplier}
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        supplier: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Buyer</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.buyer}
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        buyer: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Line Requester</label>
                        </td>
                        <td>
                            <select
                                className="form-control"
                                onChange={(e) => {
                                    return setMaterial({
                                        ...material,
                                        line: e.target.value,
                                    });
                                }}
                                defaultValue={data.requester}
                            >
                                {line?.map((item) => {
                                    return (
                                        <option
                                            className="form-control"
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Remark</label>
                        </td>
                        <td>
                            <input
                                defaultValue={data.remark}
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                    setMaterial({
                                        ...material,
                                        remark: e.target.value,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="tdleft">
                            <label>Received</label>
                        </td>
                        <td>
                            <label>
                                <select
                                    defaultValue={data.received}
                                    className="form-control"
                                    onChange={(e) => {
                                        setMaterial({
                                            ...material,
                                            checkResult: e.target.value,
                                        });
                                    }}
                                >
                                    <option className="form-control">
                                        ACCEPT
                                    </option>
                                    <option className="form-control">
                                        RETURN
                                    </option>
                                </select>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="col-md-12 text-center">
                <button
                    type="button"
                    className="btn btn-primary me-3"
                    onClick={handleSubmit}
                >
                    Save Material
                </button>
            </div>
        </>
    );
}

export default EditMaterial;
