import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { logout } from 'services/userService';

export default function Header() {
    const user = useSelector((state) => state.user.currentUser);
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
                <Nav.Link as={Link} to='/user-list'>
                    User List
                </Nav.Link>
                {!user ? (
                    <Nav.Link as={Link} to='/login'>
                        Login
                    </Nav.Link>
                ) : (
                    <Nav.Link as={Link} to='/' onClick={handleLogout}>
                        Logout
                    </Nav.Link>
                )}
            </span>
        </Navbar>
    );
}
