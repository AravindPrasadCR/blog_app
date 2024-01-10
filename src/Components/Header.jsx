import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit';



function Header() {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="navbar shadow-0 position-fixed top-0 w-100 mb-5 bg-light">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
      <p className='fs-5 '>Focus <i class="fa-solid fa-blog"></i></p>
      </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><MDBIcon fas icon="bars"  /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav style={{width:'500px'}} className="nav ms-auto  d-flex justify-content-evenly align-items-center fs-5">
         <Nav.Link href='#home'  onClick={()=>navigate("/")} >Home</Nav.Link>
            <Nav.Link onClick={()=>navigate("/allblogs")}>All blogs</Nav.Link>
            <Nav.Link onClick={()=>navigate("/categories")}>Category</Nav.Link>
            <Nav.Link onClick={()=>navigate("/add")}>Add Blog</Nav.Link>
            <Nav.Link  href='#subscribe'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header