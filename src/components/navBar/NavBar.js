import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.png';
import './navbar.css'

export default function NavBar() {
    return (
        <>
           <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="#home">
      <img className="logo" src={logo} alt="My portfolio logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
        </>
    )
}
