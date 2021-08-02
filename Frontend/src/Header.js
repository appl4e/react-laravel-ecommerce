import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React Laravel Ecommerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Registration</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
          <Nav.Link as={Link} to="/update">Update Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
