import React from 'react';
import logo from '../../assets/images/KaiHammer.png'
import CartBadge from '../cartBtn/CartWidget';
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarScroll() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="mx-5 d-flex justify-content-center" fluid>
        <a href="#"><img className="logo" src={logo} alt="logo" /></a>
        <Navbar.Brand href="#">KaiHammer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5 navbar-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown className="navbar-links" title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Dados</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Tableros
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Merch
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartBadge/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="searchBtn" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;