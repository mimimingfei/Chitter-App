import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPeep = ({user}) => {
    const [peepContent, setPeepContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:4000/addPeep", {firstName: user.firstName, lastName: user.lastName, peepContent: peepContent});
        setPeepContent('');
        navigate('/');
      } catch (error) {
        console.log(error.message);
      }
    };

 
    return (
      <div className='d-flex justify-content-center align-items-center my-5'>
        <Form onSubmit={handleSubmit} className="w-50">
        <Form.Label style={{ fontSize: '24px' }}>Add a new peep</Form.Label>
        <Form.Group controlId="formBasicPeepContent"className="my-4">
          <Form.Control type="text" value={peepContent} onChange={(event) => setPeepContent(event.target.value)} placeholder="Enter peep content" />
        </Form.Group >
        <Button variant="primary" type="submit" className="my-4">Post Peep</Button>
      </Form>
      </div>
    );
};


export default AddPeep;
