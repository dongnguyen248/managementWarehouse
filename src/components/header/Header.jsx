import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { logout } from 'services/userService';
import { userRequest } from 'utilities/requestMethod';

export default function Header() {
    const user = useSelector(
        (state) => state.persistedReducer.user.currentUser,
    );
    const dispatch = useDispatch();
    const handleLogout = () => {
        logout(dispatch);
    };
    return (
        <Navbar bg='dark' variant='dark fixed-top'>
            <span className='container'>
                <Nav.Link as={Link} to='/' className='navbar__brand-fontsize'>
                    WareHouse
                </Nav.Link>
                <Nav.Link as={Link} to='/'>
                    Invertory
                </Nav.Link>
                <Nav.Link as={Link} to='/history-import'>
                    Import History
                </Nav.Link>
                <Nav.Link as={Link} to='/history-export'>
                    Export History
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to='/user-list'
                    className={user?.employee.isAdmin ? '' : 'visually-hidden'}>
                    User List
                </Nav.Link>
                {!user ? (
                    <Nav.Link as={Link} to='/login'>
                        Login
                    </Nav.Link>
                ) : (
                    <>
                        <Dropdown>
                            <span className='text-white me-2'>
                                {user.employee.lastName +
                                    user.employee.firstName}
                            </span>
                            <Dropdown.Toggle
                                variant='success'
                                id='dropdown-basic'>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/I80W1Q0.png`}
                                    className='rounded-circle'
                                    height='30'
                                    alt='Black and White Portrait of a Man'
                                    loading='lazy'
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Nav.Link
                                    as={Link}
                                    to='/'
                                    onClick={handleLogout}
                                    className='text-black dropdown-item'>
                                    Logout
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    data={user.employee}
                                    to='/change-password'
                                    className='text-black dropdown-item'>
                                    Change Password
                                </Nav.Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </>
                )}
            </span>
        </Navbar>
    );
}
