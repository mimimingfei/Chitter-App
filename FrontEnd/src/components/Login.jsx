import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/login', { email, password });
    // alert(res.data.message);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <Form className="w-50">
       <h2>Log in to Chitter</h2> 
        <Form.Group controlId="formBasicEmail" className="my-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="my-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3" onClick={handleSubmit}>
          Log in
        </Button>
      </Form>
    </div>
  );
}
