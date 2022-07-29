import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Business Law Dexterous
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            {
              user
              ?
              <button onClick={() => signOut(auth)} className='bg-dark text-light border border-0 h5'>Logout</button>
              :
              <div className='d-flex'>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
              </div>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;