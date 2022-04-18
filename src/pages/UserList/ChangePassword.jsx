import swal from 'sweetalert';
import Header from 'components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from 'services/userService';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import './ChangePassword.css';

function ChangePassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
    });
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser.employee,
    );
    const dispatch = useDispatch();
    const handleChangePassword = (data) => {
        if (data.newPassowrd !== data.confirmPassword) {
            swal(
                'new password and confirm password is not same! Please try again.',
            );
        } else {
            dispatch(changePassword({ ...data, userId: user.id }));
        }
    };
    return (
        <>
            <Header className='mb-4' />
            <div className='container ' style={{ paddingTop: '5.5rem' }}>
                <h1 className='text-center'>Change Password</h1>
                <div className='mb-3'>
                    <label className='form-label'>Old Password</label>
                    <input
                        type='password'
                        className='form-control'
                        {...register('oldPassword', {
                            required: 'This input is required!',
                            minLength: {
                                value: 6,
                                message: 'This input must exceed 6 characters',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name='oldPassword'
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(
                                      ([type, message]) => (
                                          <p key={type} className='errorMsg'>
                                              {message}
                                          </p>
                                      ),
                                  )
                                : null;
                        }}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>New Password</label>
                    <input
                        type='password'
                        className='form-control'
                        {...register('newPassword', {
                            required: 'This input is required!',
                            minLength: {
                                value: 6,
                                message: 'This input must exceed 6 characters',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name='newPassword'
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(
                                      ([type, message]) => (
                                          <p key={type} className='errorMsg'>
                                              {message}
                                          </p>
                                      ),
                                  )
                                : null;
                        }}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        {...register('confirmPassword', {
                            required: 'This input is required!',
                            minLength: {
                                value: 6,
                                message: 'This input must exceed 6 characters',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name='newPassword'
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(
                                      ([type, message]) => (
                                          <p key={type} className='errorMsg'>
                                              {message}
                                          </p>
                                      ),
                                  )
                                : null;
                        }}
                    />
                </div>
                <div className='col-md-12 text-center flex'>
                    <button
                        type='submit'
                        className='btn btn-primary'
                        onClick={handleSubmit(handleChangePassword)}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
