import { useCallback } from 'react';
import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import ImportHistorySearch from 'components/searchingForm/ImportHistorySearch';
import dataImport from './dataImport';

export default function ImportHistory() {
    const handleDelete = useCallback(
        (row) => async () => {
            console.log(row);
        },
        [],
    );
    const handleEdit = useCallback(
        (row) => async () => {
            console.log(row);
        },
        [],
    );
    const columns = [
        {
            name: 'Qcode',
            selector: (row) => row.qcode,
            grow: 0.3,
        },
        {
            name: 'Item',
            selector: (row) => row.item,
        },
        {
            name: 'Location',
            selector: (row) => row.location,
            grow: 0.3,
        },
        {
            name: 'Specification',
            selector: (row) => row.spec,
            grow: 2,
            wrap: true,
        },
        {
            name: 'Import Date',
            selector: (row) => row.importdate,
            grow: 0.3,
            wrap: true,
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            grow: 0.3,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
            grow: 0.3,
        },
        {
            name: 'PO Number',
            selector: (row) => row.ponumber,
            grow: 0.3,
        },
        {
            name: 'Supplier',
            selector: (row) => row.supplier,
        },
        {
            name: 'Buyer',
            selector: (row) => row.buyer,
        },
        {
            name: 'Requester',
            selector: (row) => row.requester,
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
                <div>
                    <button
                        className='btn me-2 btn-primary btn-sm'
                        onClick={handleEdit(row)}>
                        Edit
                    </button>

                    <button
                        className='btn btn-danger  btn-sm'
                        onClick={handleDelete(row)}>
                        Delete
                    </button>
                </div>
            ),
            grow: 1,
        },
    ];

    return (
        <>
            <Header />
            <div className='swrap'>
                <h1 className='header__list'>Import History List</h1>
                <ImportHistorySearch />
                <DataTable columns={columns} data={dataImport} pagination />;
            </div>
        </>
    );
}
