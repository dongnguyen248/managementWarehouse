import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
    const user = false;
    return (
        <Navbar bg="dark" variant="dark fixed-top">
            <span className="container">
                <Nav.Link
                    as={Link}
                    to="/inventory"
                    className="navbar__brand-fontsize"
                >
                    WareHouse
                </Nav.Link>
                <Nav.Link as={Link} to="/inventory">
                    Invertory
                </Nav.Link>
                <Nav.Link as={Link} to="/history-import">
                    Import History
                </Nav.Link>
                <Nav.Link as={Link} to="/history-export">
                    Export History
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                    Login
                </Nav.Link>
            </span>
        </Navbar>
    );
}
