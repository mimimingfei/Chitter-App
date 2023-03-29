import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from 'react-bootstrap';

const AllPeeps = ({peeps}) => {
  useEffect(() => {
    getPeepsData();
  }, []);

  const [allPeeps, setAllPeeps] = useState([]);

  const getPeepsData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/`);
      setAllPeeps(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      {allPeeps.map((peep) => (
        <Card key={peep._id}>
          <div>
          <Card.Body className='body'>
            <Card.Title>{peep.peepContent} </Card.Title>
            <Card.Text className="text">{peep.firstName} {peep.lastName}</Card.Text>
            <Card.Text className='text'>{new Date(peep.peepCreatedTime).toLocaleString()}</Card.Text>
          </Card.Body>
           </div>
        </Card>
      ))}
    </>
  );
};

export default AllPeeps;
