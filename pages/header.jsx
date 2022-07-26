import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import styles from '../styles/Header.module.css'
export const Header = () => {
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            


            <Link href='/about' style={{textDecoration:'none'}}>
                          <li className='active'><a style={{paddingRight:'20px',fontSize:'20px',color:'gray',paddingTop:'15px',cursor:'pointer',paddingTop:'30px'}} >About</a></li>
                          </Link>

                          <Link href='/contact' style={{textDecoration:'none'}}>
                          <li ><a style={{paddingRight:'20px',fontSize:'20px',color:'gray',paddingTop:'15px',cursor:'pointer',paddingTop:'30px'}} >Contact</a></li>
                          
                          </Link>

                          <Link href='#' style={{textDecoration:'none'}}>
                          <li ><a style={{paddingRight:'20px',fontSize:'20px',color:'gray',paddingTop:'15px',cursor:'pointer',paddingTop:'30px'}} ><span >Page</span></a></li>
                          
                          </Link>



            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
