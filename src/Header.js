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
    <Navbar collapseOnSelect expand="sm" bg="" variant="dark" style={styles} sticky='top'>
      <Container>
        <Navbar.Brand href="#about">Sinka Laszlo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className='nav-items'>About</Nav.Link>
            <Nav.Link href="#skills" className='nav-items'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='nav-items'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='nav-items'>Contact</Nav.Link>
            <Nav.Link onClick={toggleTheme}>{theme ? '🌕' : '☀️'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header