import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const AddPeep = () => {
  const location = useLocation();
  const [peepContent, setPeepContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/', {
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        peepContent,
        peepCreatedTime: new Date().toISOString()
      });
      console.log(res.data);
      alert("Peep posted!");
      setPeepContent('');
    } catch (error) {
      console.error('Peep failed:', error);
      alert("Peep failed");
    }
  };
  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <Form className='w-50'>
        <h2>Add Peep</h2>
        <Form.Group controlId='formBasicPeep' className='my-4'>
          <Form.Control type='text' value={peepContent} onChange={(e) => setPeepContent(e.target.value)} placeholder='Enter Peep' />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3' onClick={handleSubmit}>
          Add Peep
        </Button>
      </Form>
    </div>
  );
};


export default AddPeep;
