import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"





const Header =() =>{
    return (
        <>
        
        <div className=" justify-content-center d-flex my-lg-5 ">
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="images/onuvuti-1.png" alt="" srcset="" width= "240px" height= "100px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Newly Arrived</Nav.Link>
            <NavDropdown title="Writer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kunal Kumar Mondal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Amitava Bondyopadhyay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ayan Banerjee</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Santanu Mondal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Shubhasis Kumar Chandra</NavDropdown.Item>
             


              
            </NavDropdown>
            <Nav.Link href="#link">About </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <form class="d-flex mx-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </Container>
    </Navbar>
    </div>
        </>
    )
}
export default Header;