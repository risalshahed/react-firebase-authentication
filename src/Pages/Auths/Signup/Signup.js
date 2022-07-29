import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checked, setChecked] = useState(false);

  if(loading || updating) {
    return <Loading />
  }

  if(user) {
    console.log('user', user);
  }

  const handleSignup = async e => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert('Profile Updated');
    navigate('/');
  }

  return (
    <div className='checkout my-5'>
      <h2 className="text-primary mb-4 text-center">Create Your Account</h2>

      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name='terms'
            label="Accept Genius Car Terms & Conditions"
            onClick={() => setChecked(!checked)}
            className={checked ? 'text-primary' : 'text-danger'}
          />
        </Form.Group>

        {/* display error message if exists */}
        <p className='text-danger'>{ error?.message }</p>

        <Button disabled={!checked} className='w-25 d-block mx-auto' variant="primary" type="submit">
          Create Account
        </Button>
        <p className='text-center my-4'>
          Already have an account? <span style={{cursor: 'pointer'}} className='text-warning' onClick={navigateLogin}>Login Here</span>
        </p>
      </Form>

      <SocialLogin />

    </div>
  );
}

export default Signup;