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
import { ROUTES } from '../../constants/routes';
import { CATEGORIES } from '../../constants/categories';
import {NavLink} from 'react-router-dom';

function NavbarScroll() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="mx-5 d-flex justify-content-center" fluid>
        <NavLink to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
        <Navbar.Brand><NavLink to="/" style={{fontFamily: 'titleFont'}}>KaiHammer</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5 navbar-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <NavDropdown className="navbar-links" title="Categorias" id="navbarScrollingDropdown">
              {CATEGORIES.map((category) =>(
                <NavDropdown.Item key={category.id}>
                  <NavLink to={ROUTES.CATEGORY.replace(":categoryType", category.label)}>{category.label}</NavLink>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <NavLink to={ROUTES.CART}><CartBadge /></NavLink>
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