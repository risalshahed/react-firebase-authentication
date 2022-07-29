import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  let from = location.state?.from?.pathname || "/checkout";
  
  const navigateSignup = () => {
    navigate('/signup');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(loading || sending) {
    return <Loading />
  }

  if(user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    if(email) {
      await sendPasswordResetEmail(email);
      // alert('Email sent');
      toast('Email sent');
    } else {
      toast('Enter your email');
    }
  }

  return (
    <div className='checkout my-5'>
      <h2 className="text-primary mb-4 text-center">Login Here</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </Form.Group>

        {/* display error message if exists */}
        <p className='text-danger'>{ error?.message }</p>

        <Button className='w-25 d-block mx-auto' variant="primary" type="submit">
          Login
        </Button>
        
        <p className='text-center mt-3'>
          Forget Password? <span style={{cursor: 'pointer'}} className='text-primary' onClick={resetPassword}>Click to Reset</span>
        </p>
        <p className='text-center my-4'>
          New in Business Law? <span style={{cursor: 'pointer'}} className='text-warning' onClick={navigateSignup}>Create Account</span>
        </p>
      </Form>

      <SocialLogin />
      <ToastContainer />

    </div>
  );
};

export default Login;