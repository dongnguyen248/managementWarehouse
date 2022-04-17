import React, { useState } from 'react';
import swal from 'sweetalert';
import { userRequest } from 'utilities/requestMethod';
import Header from 'components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from 'services/userService';

function ChangePassword() {
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser.employee,
    );
    const dispatch = useDispatch();
    const [password, setPassword] = useState({
        id: user.id,
        oldPassword: '',
        newPassowrd: '',
        confirmPassword: '',
    });
    const handleChangePassword = () => {
        if (password.newPassowrd != password.confirmPassword) {
            swal(
                'new password and confirm password is not same! Please try again.',
            );
        } else {
            dispatch(changePassword(password));
        }
    };
    return (
        <>
            <Header className='mb-4' />
            <div className='container ' style={{ paddingTop: '5.5rem' }}>
                <h1 className='text-center'>Change Password</h1>
                <div className='mb-3'>
                    <label className='form-label'>New Password</label>
                    <input
                        type='password'
                        className='form-control'
                        onChange={(e) =>
                            setPassword({
                                ...password,
                                newPassowrd: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        onChange={(e) =>
                            setPassword({
                                ...password,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='col-md-12 text-center flex'>
                    <button
                        type='submit'
                        className='btn btn-primary'
                        onClick={handleChangePassword}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
