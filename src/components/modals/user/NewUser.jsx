import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from 'services/userService';

function NewUser() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        employeeId: '',
        password: '',
    });
    const handleAddEmployee = () => {
        dispatch(createEmployee(user));
    };
    return (
        <div>
            <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })
                    }
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Last Name</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })
                    }
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>EmployeeId</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) =>
                        setUser({ ...user, employeeId: e.target.value })
                    }
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                    type='password'
                    className='form-control'
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
            </div>
            <div className='col-md-12 text-center'>
                <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={handleAddEmployee}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default NewUser;
