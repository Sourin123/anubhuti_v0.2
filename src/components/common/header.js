import React from 'react'
import "../stylesheet/style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"



// const Header = () => {
    
//   return (
//     <>
    
//     <div className=" container mt-lg-4 ">
//       <nav className="navbar navbar-light rounded navbar-expand-lg  "  aria-label="Eleventh navbar example">
//         <div className="container-fluid">
//             <div className='justify-content-md-center d-flex'>
            
//           <a className="navbar-brand" href="/">
//             <img src="images/onuvuti-1.svg" alt="Anuvuti Prakashan"  className="d-inline-block align-text-top img_size"  />
            
//           </a>
//           {/* <span className="navbar-text navbar-brand h2 text-primary">Anuvuti Prakashan</span> */}
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbars" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
  
//           <div className="collapse navbar-collapse" id="navbarsExample09">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">Newly Arrived </a>
//               </li>
             
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="/" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Writers </a>
//                 <ul className="dropdown-menu" aria-labelledby="dropdown09">
//                   <li><a className="dropdown-item" href="/">Action</a></li>
//                   <li><a className="dropdown-item" href="/">Another action</a></li>
//                   <li><a className="dropdown-item" href="/">Something else here</a></li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link " href="/" tabindex="-1" aria-disabled="true">About </a>
//               </li>

//             </ul>
            
//           </div>
//         </div>
//         </div>
//       </nav>
      
//     </div>
//     </>
//   )
// }

const Header =() =>{
    return (
        <>
        
        <div className=" justify-content-center d-flex my-lg-5">
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="images/onuvuti-1.png" alt="" srcset="" width= "240px" height= "100px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Newly Arrived</Nav.Link>
            <NavDropdown title="Writer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        </>
    )
}
export default Header;