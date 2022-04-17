import Header from 'components/header/Header';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { userRequest } from 'utilities/requestMethod';
import { Modal } from 'react-bootstrap';
import EditUser from 'components/modals/user/EditUser';
import NewUser from 'components/modals/user/NewUser';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from 'services/userService';

function UsersList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [handleEditUser, setHandlEditUser] = useState(false);
    const [addUser, setAddUser] = useState(false);
    const [userEdit, setUserEdit] = useState([]);
    const dispatch = useDispatch();
    const getAllUser = async (dispatch) => {
        const res = await userRequest.get('/token');
        setData(res.data);
        return res.data;
    };
    const handleDelete = useCallback((row) => async () => {
        dispatch(deleteEmployee(row.id));
    });
    const handleEdit = useCallback(
        (row) => async () => {
            setUserEdit(row);
            setHandlEditUser(true);
        },
        [currentPage, perPage, totalRows],
    );
    useEffect(() => {
        getAllUser();
    }, []);
    const handleAddUser = () => {
        setAddUser(true);
    };
    const columns = useMemo(
        () => [
            {
                name: 'First Name',
                selector: (row) => row.firstName,
                sortable: true,
            },
            {
                name: 'Last Name',
                selector: (row) => row.lastName,
                sortable: true,
            },
            {
                name: 'EmployeeId',
                selector: (row) => row.employeeId,
                sortable: true,
            },
            {
                name: 'Action',
                cell: (row) => (
                    <div className='flex'>
                        <button
                            onClick={handleDelete(row)}
                            className='btn btn-danger me-3'>
                            Delete
                        </button>
                        <button
                            onClick={handleEdit(row)}
                            className='btn btn-primary'>
                            Edit
                        </button>
                    </div>
                ),
            },
        ],
        [handleDelete, handleEdit],
    );

    return (
        <div className='swrap'>
            <Header />
            <button
                className='btn btn-primary mt-3 float-end me-3'
                onClick={handleAddUser}>
                Add User
            </button>
            <DataTable
                title='Users List'
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
                paginationServer
                onSelectedRowsChange={({ selectedRows }) =>
                    console.log(selectedRows)
                }
            />
            <Modal
                size='lg'
                show={handleEditUser}
                onHide={() => setHandlEditUser(false)}
                aria-labelledby='editUser-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='editUser-modal-sizes-title-lg'>
                        Edit User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUser data={userEdit} />
                </Modal.Body>
            </Modal>
            <Modal
                size='lg'
                show={addUser}
                onHide={() => setAddUser(false)}
                aria-labelledby='addUser-modal-sizes-title-lg'>
                <Modal.Header closeButton>
                    <Modal.Title id='addUser-modal-sizes-title-lg'>
                        Add User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewUser />
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default UsersList;
