export default function InventorySearch() {
    const hanleSearchItem = () => {
        console.log("search item");
    };
    return (
        <>
            <form className="d-flex">
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
                    onClick={hanleSearchItem}
                >
                    Search
                </button>
            </form>
        </>
    );
}
