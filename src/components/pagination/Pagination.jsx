import React from "react";

export default function Pagination() {
    function getNumberOfPages(rowCount, rowsPerPage) {
        return Math.ceil(rowCount / rowsPerPage);
    }

    function toPages(pages) {
        const results = [];

        for (let i = 1; i < pages; i++) {
            results.push(i);
        }

        return results;
    }
    const BootyPagination = ({
        rowsPerPage,
        rowCount,
        onChangePage,
        onChangeRowsPerPage, // available but not used here
        currentPage,
    }) => {
        const handleBackButtonClick = () => {
            onChangePage(currentPage - 1);
        };

        const handleNextButtonClick = () => {
            onChangePage(currentPage + 1);
        };

        const handlePageNumber = (e) => {
            onChangePage(Number(e.target.value));
        };

        const pages = getNumberOfPages(rowCount, rowsPerPage);
        const pageItems = toPages(pages);
        const nextDisabled = currentPage === pageItems.length;
        const previosDisabled = currentPage === 1;

        return (
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={handleBackButtonClick}
                            disabled={previosDisabled}
                            aria-disabled={previosDisabled}
                            aria-label="previous page"
                        >
                            Previous
                        </button>
                    </li>
                    {pageItems.map((page) => {
                        const className =
                            page === currentPage
                                ? "page-item active"
                                : "page-item";

                        return (
                            <li key={page} className={className}>
                                <button
                                    className="page-link"
                                    onClick={handlePageNumber}
                                    value={page}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={handleNextButtonClick}
                            disabled={nextDisabled}
                            aria-disabled={nextDisabled}
                            aria-label="next page"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        );
    };

    return BootyPagination;
}

const columns = [
    {
        name: "Title",
        selector: (row) => row.title,
        sortable: true,
    },
    {
        name: "Directior",
        selector: (row) => row.director,
        sortable: true,
    },
    {
        name: "Runtime (m)",
        selector: (row) => row.runtime,
        sortable: true,
        right: true,
    },
    {
        button: true,
        cell: () => (
            <div className="App">
                <div class="openbtn text-center">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Open modal
                    </button>
                    <div class="modal" tabindex="-1" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

// RDT exposes the following internal pagination properties
