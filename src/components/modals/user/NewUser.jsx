import { useDispatch } from 'react-redux';
import { createEmployee } from 'services/userService';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
function NewUser() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
    });
    const handleAddEmployee = (data) => {
        dispatch(createEmployee(data));
    };
    return (
        <div>
            <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input
                    type='text'
                    className='form-control'
                    {...register('firstName', {
                        required: 'This input is required!',
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name='firstName'
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
                <label className='form-label'>Last Name</label>
                <input
                    type='text'
                    className='form-control'
                    {...register('lastName', {
                        required: 'This input is required!',
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name='lastName'
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
                <label className='form-label'>EmployeeId</label>
                <input
                    type='text'
                    className='form-control'
                    {...register('employeeId', {
                        required: 'This input is required!',
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name='employeeId'
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
                <label className='form-label'>Password</label>
                <input
                    type='password'
                    className='form-control'
                    {...register('password', {
                        required: 'This input is required!',
                        minLength: {
                            value: 6,
                            message: 'This input must exceed 6 characters',
                        },
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name='password'
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
            <div className='col-md-12 text-center'>
                <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={handleSubmit(handleAddEmployee)}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default NewUser;
