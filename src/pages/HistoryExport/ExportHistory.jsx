import DataTable from 'react-data-table-component';
import Header from 'components/header/Header';
import exports from './dataExport';
import { useCallback, useEffect, useState } from 'react';
import './ExportHistory.css';
import ExportHistorySearch from 'components/searchingForm/ExportHistorySearch';

export default function ExportHistory() {
    const columns = [
        {
            name: 'Zone',
            selector: (row) => row.zone,
            wrap: true,
        },
        {
            name: 'Qcode',
            selector: (row) => row.qcode,
            grow: 0.5,
            wrap: true,
        },
        {
            name: 'Item',
            selector: (row) => row.item,
            wrap: true,
        },
        {
            name: 'Location',
            selector: (row) => row.location,
        },
        {
            name: 'Specification',
            selector: (row) => row.spec,
            wrap: true,
            grow: 2,
        },
        {
            name: 'Unit',
            selector: (row) => row.unit,
            grow: 0.3,
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            grow: 0.3,
        },
        {
            name: 'Remark',
            selector: (row) => row.remark,
        },
        {
            name: 'Locator',
            selector: (row) => row.locator,
            wrap: true,
        },
        {
            cell: (row) => (
                <div>
                    <button
                        className='btn me-2  btn-primary btn-sm'
                        onClick={handleEdit(row)}>
                        Edit
                    </button>

                    <button
                        className='btn btn-danger btn-sm'
                        onClick={handleDelete(row)}>
                        Delete
                    </button>
                </div>
            ),
            grow: 1,
        },
    ];

    const [historyep, setHistoryep] = useState(exports);
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

    const handleRowClicked = (row) => {
        const updatedData = historyep.map((item) => {
            if (row.id !== item.id) {
                delete item.toggleSelected;
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
            when: (row) => row.toggleSelected,
            style: {
                backgroundColor: '#dff0d8',
                userSelect: 'none',
            },
        },
    ];

    return (
        <>
            <Header />
            <div className='swrap'>
                <h1 className='header__list'>Export History List</h1>
                <ExportHistorySearch />

                <DataTable
                    columns={columns}
                    data={historyep}
                    onRowClicked={handleRowClicked}
                    conditionalRowStyles={conditionalRowStyles}
                    pagination
                />
            </div>
        </>
    );
}
