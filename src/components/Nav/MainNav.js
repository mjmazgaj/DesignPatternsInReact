import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';

function MainNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Design Patterns</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Factory">Factory Pattern</Nav.Link>
            <Nav.Link href="/Pattern2">Pattern2</Nav.Link>
            <Nav.Link href="/Pattern3">Pattern3</Nav.Link>
            <Nav.Link href="/Pattern4">Pattern4</Nav.Link>
            <Nav.Link href="/Pattern5">Pattern5</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;