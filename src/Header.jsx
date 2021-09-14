import React from 'react';
import logo from './Image/logo.jpeg';
import {Nav,NavDropdown,Navbar} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import MyVerticallyCenteredModal1 from "./Login";

const Header=()=>{
  const [modalShow1, setModalShow1] = React.useState(false);
    return(
        <>
         <div className="container-fluid">
                 <div className="row">
                        <div className="col-sm-2 logo-div">
                        <a href="/">   <img src={logo} className="logo"/></a>
                        </div>


                        <div className="col-sm-8 navbar-div">
                        <Navbar expand="lg">

  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#action2">About us</Nav.Link>
      <NavDropdown title="District" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Dehardun</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Champawat</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Chamoli</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Haridwar</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Mussorie</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Bageshwar</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Almora</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Tehri</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Champawat</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Nanital</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Pithoragarh</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Rudraprayag</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/report">Running Project</Nav.Link>
      <Nav.Link href="/imagegallery">Image Gallery</Nav.Link>
    </Nav>
    
   
  </Navbar.Collapse>
</Navbar>     
  </div>
<div className="col-sm-2 login">
<button type="button" className="flike"><i class="far fa-thumbs-up"></i> Like 142</button>
<button type="button" className="slike"><i class="fas fa-share-square"></i> Share </button>
<span> <a onClick={() => setModalShow1(true)}>
Sign In <i class="fas fa-sign-in-alt"></i></a>
<MyVerticallyCenteredModal1
        show={modalShow1} 
        onHide={() => setModalShow1(false)}/> </span>

</div>

                      
                 </div>
         </div>

        </>
    );
};

export default Header;