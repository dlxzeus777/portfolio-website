import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ theme, toggleTheme }) => {

  const styles =
  {
    backgroundColor: '#A7171A'
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg="" variant="dark" style={styles}>
      <Container>
        <Navbar.Brand href="#about">Sinka Laszlo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={toggleTheme}>{theme ? 'Dark Mode' : 'Light Mode'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header