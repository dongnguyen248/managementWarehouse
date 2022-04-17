import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployee } from 'services/userService';

function EditUser({ data }) {
    const [employee, setEmployee] = useState({
        Id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        employeeId: data.employeeId,
        password: data.password,
    });
    const dispatch = useDispatch();

    const handleUpdateEmployee = () => {
        dispatch(updateEmployee(employee));
    };
    return (
        <div>
            <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) =>
                        setEmployee({ ...employee, firstName: e.target.value })
                    }
                    required
                    defaultValue={data.firstName}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Last Name</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) =>
                        setEmployee({ ...employee, lastName: e.target.value })
                    }
                    required
                    defaultValue={data.lastName}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>EmployeeId</label>
                <input
                    type='text'
                    className='form-control'
                    defaultValue={data.employeeId}
                    disabled
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                    type='password'
                    className='form-control'
                    onChange={(e) =>
                        setEmployee({ ...employee, password: e.target.value })
                    }
                    required
                />
            </div>
            <button
                type='submit'
                className='btn btn-primary'
                onClick={handleUpdateEmployee}>
                Submit
            </button>
        </div>
    );
}

export default EditUser;
