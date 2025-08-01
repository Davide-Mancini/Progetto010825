import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className=" bg-info-subtle sticky-top">
      <Container>
        <Link className="navbar-brand fw-bold" href="#home" to="/">
          EPIC METEO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href="#home" to="/">
              Home
            </Link>
            <Nav.Link href="#link">Allerte Maltempo</Nav.Link>
            <Nav.Link href="#link">Terremoti</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Terremoti</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
