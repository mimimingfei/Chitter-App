import { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';


const AddPeep = ({updatePeeps}) => {
  const navigate = useNavigate();
  const [peepContent, setPeepContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const user = jwt.decode(token); 
      const peepData = {
        firstName: user.firstName,
        lastName: user.lastName,
        peepContent,
        peepCreatedTime: new Date().toISOString()
      };
      const res = await axios.post('http://localhost:4000',peepData)
      console.log(res.data);
      alert("Peep posted!");
      setPeepContent('');
      updatePeeps();
      navigate('/')
    } catch (error) {
      console.error('Peep failed:', error);
      alert("Peep failed");
    }
  };


  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <Form className='w-50'>
        <h2>Add A Peep</h2>
        <Form.Group controlId='formBasicPeep' className='my-4'>
          <Form.Control type='text' value={peepContent} onChange={(e) => setPeepContent(e.target.value)} placeholder='Enter peep' />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3' onClick={handleSubmit}>
          Post
        </Button>
      </Form>
    </div>
  );
};


export default AddPeep;
