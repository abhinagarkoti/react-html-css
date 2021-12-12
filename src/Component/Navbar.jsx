import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./Navbar.css"

function NavbarSec() {
    return (
        <div style={{

            boxShadow: "12px 12px 2px 1px rgb(220,220,220)"
        }}>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About Us</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                            <Nav.Link href="#action2">Products</Nav.Link>
                            <Nav.Link href="#action2">Portfoilio</Nav.Link>
                        </Nav>
                        < button className="btnn"
                            style={{ color: "white", fontSize: "1rem", padding: "5px 20px ", borderRadius: "30px", marginLeft: "100px", backgroundColor: "purple" }}>
                            Contact Us
                        </button >
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default NavbarSec

