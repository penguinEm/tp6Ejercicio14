import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const BarraDeNavegacion = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-subtle">
        <Container className="bg-danger-sublte">
          <Link className="gradiente">
              <i className="bi bi-magic"> </i>
              RECETAS
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default BarraDeNavegacion;
