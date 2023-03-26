import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
        ...user,
        [name]: value
    });
  };

  const handleSignup = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/signup', user);
    setUser({
        ...user,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
  };

  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <Form className="w-50">
         <h2>Sign up for Chitter</h2>
        <Form.Group controlId="formBasicFirstName" className="my-4">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group controlId="formBasicLastName" className="my-4">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={user.lastName} onChange={handleChange} placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail"className="my-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="my-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4" onClick={handleSignup}>
          Sign up
        </Button>
      </Form>
    </div>
  );
}
