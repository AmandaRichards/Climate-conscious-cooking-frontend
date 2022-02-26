import React from 'react';
import {Navbar} from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import css from "./navBar.module.css"
import Link from "next/link"


export function NavBar(){
    return(
 <div>
<Navbar bg="green" expand="lg" sticky="top" className={css.NavBar}>
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown  title="Cuisine" id="basic-nav-dropdown" className={css.NavBar}>
          <NavDropdown.Item href="#action/3.1" className={css.NavBar} >Indian</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className={css.NavBar}>Italian</NavDropdown.Item>
          <Link href="./recipe">
          <NavDropdown.Item href="#action/3.3" className={css.NavBar}>Scottish</NavDropdown.Item>
          </Link>
           <NavDropdown.Item href="#action/3.4" className={css.NavBar}>Ugandan</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.5" className={css.NavBar}>View all</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  
    </div>
    )
}

export default NavBar;