import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Css/Navbar.css'


const Navbars = () =>
{
    return(
        <>
          <Navbar bg="dark" expand="lg">
          <Navbar.Brand className='text-light'>COVIDTRACKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-light">
          <Link className='text-light navi text-center pt-2 pl-3' to="/">Home</Link>
          <Link className='text-light navi text-center pt-2 pl-3' to="/track">Track Cases</Link>
          <Link className='text-light navi text-center pt-2 pl-3' to="/precautions">Precautions</Link>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default Navbars; 