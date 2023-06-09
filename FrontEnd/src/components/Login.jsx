import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar/Navbar.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: ``,
    password: ``
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/login', user);
      setUser({ email: ``, password: `` });
      alert("Login successful. You can now post peeps!")
      navigate('/peep')
    } catch (error) {
      console.error('Login failed:', error);
      alert("Login failed");
    }
  }
  


  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <Form className="w-50">
        <h2>Log in to Chitter</h2>
        <Form.Group controlId="formBasicEmail" className="my-4">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="my-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password" />
        </Form.Group>

         <Button variant="primary" type="submit" className="my-3" onClick={handleLogin}>Log in
        </Button>
         <p>Not a user yet? <Link to="/signup">Sign up</Link></p>
      </Form>
    </div>
    )};