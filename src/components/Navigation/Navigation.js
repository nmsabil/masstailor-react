import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { MdLocalPhone } from "react-icons/md";
import logo from "../../images/logo.png";
function Navigation() {
  return (
    <Navbar id='mainNav' bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image style={{ width: 150 }} src={logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
          <Nav className='text-center align-items-center'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Services</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#link'>Our Work</Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
            <Nav.Link
              className='phone mt-2 mb-5 mt-lg-auto mb-lg-auto d-flex align-items-center justify-content-center ms-lg-5 ms-md-0 px-3 px-lg-2 rounded-pill'
              href='#link'
            >
              <MdLocalPhone className='me-1' />
              07424605611
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
