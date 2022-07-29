import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css';

const Checkout = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCheckout = e => {
    e.preventDefault();
    // document.write('thank you for booking');
    document.getElementById('our-response').innerText = 'Thank You for the Booking.'
  }

  return (
    <div className='checkout my-5'>
      <h2 className='text-center text-primary mb-3'>Checkout Please</h2>

      <Form onSubmit={handleCheckout}>
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

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            min="0"
            required
          />
        </Form.Group>

        <p id="our-response" style={{color: 'green', fontSize: '2rem'}}></p>

        <Button className='w-25 d-block mx-auto my-5' variant="primary" type="submit">
          Proceed Checkout
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;