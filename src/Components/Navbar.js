import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from "react-bootstrap"
import logo from "../assets/seenohairlogo.png"
import {BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
function navbar() {

return(
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className='me-4' href="/">
      <img 
        className=" img-fluid border-0 rounded ms-4 mb-2 me-4" 
        src={logo}
        width="250"
        height="30"
      />
      </Navbar.Brand>
    
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>

    </Nav>
  </Navbar>
  <br></br>
</>
);


}
export default navbar;