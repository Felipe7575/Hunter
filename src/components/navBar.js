import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from '../components/login';


const NavBar = () => {
    const [loginDiv, setLoginDiv] = useState(false);

    const handleClick = (state) => {
        setLoginDiv(state);
    }
    return(
    <div>
        <Navbar expand="lg"  className="navBar">
            <div className="navBarDiv">
                <Container fluid>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/filled-message.png" alt="filled-message"/>
                        <Nav.Link href="#action1" className='buttonNav'>Products</Nav.Link>
                        <Nav.Link href="#action2" className='buttonNav'>Company</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <button className='button-cust createSessionButton ' onClick={()=>handleClick("register")}>Crear sesion</button>
                        <button className='button-cust loginButton' onClick={()=>handleClick("login")}>Iniciar sesion</button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </div>
        </Navbar>
        {loginDiv &&
            <Login divCloseFunction ={handleClick} state={loginDiv}></Login>
        }
        
    </div>
    
    )
}
export default NavBar;

