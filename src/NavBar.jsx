import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav,Navbar } from 'react-bootstrap';

const NavBar = () => {
return (
<>
<Navbar bg="dark" expand="lg">
<Container>
<NavLink className="navlink" to="/">Web Design </NavLink>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="navlinks">
<HashLink to="/#latest"  className="hashLink">Latest Builds</HashLink>
<HashLink to="/#process" className="hashLink" >Process</HashLink>
<HashLink to="/#service" className="hashLink" >Service</HashLink>
<HashLink to="/#contact" className="hashLink" >Contact Us</HashLink>
<HashLink to="/#projects" className="hashLink" >projects</HashLink>






</Nav>









</Navbar.Collapse>














</Container>










</Navbar>


</>
  )
}

export default NavBar
