import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Appointment.css';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAppointment = e => {
    e.preventDefault();
    document.getElementById('confirm-appointment').innerText = 'Thank you, your appointment details will be sent to your email';
  }
  return (
    <div className='appointment'>
      <h1 className='text-center mb-5'>
        Make an appointment
      </h1>
			
			<Form onSubmit={handleAppointment}>
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

        <div>
          <p id="confirm-appointment" className='text-success'></p>
          <button className="submit-appointment">
            Schedule an Appointment
          </button>
        </div>
      </Form>
		</div>
  );
};

export default Appointment;

          