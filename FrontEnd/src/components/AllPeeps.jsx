import { useEffect, useState } from "react";
import axios from "axios";
import Peep from './Peep';
import { Form, Button } from "react-bootstrap";

const AllPeeps = ({ peeps }) => {
  const [allPeeps, setAllPeeps] = useState([]);

  const getPeepsData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/allPeeps`);
      setAllPeeps(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!peeps) {
      getPeepsData();
    } else {
      setAllPeeps(peeps);
    }
  }, [peeps]);

  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
    {allPeeps.length > 0 ? (
      allPeeps.map((peep) => (
        <Peep
          key={peep.id}
          firstName={peep.firstName}
          lastName={peep.lastName}
          peepContent={peep.peepContent}
          peepCreatedTime={peep.peepCreatedTime}
        />
      ))
    ) : (
      <h1>No peeps</h1>
    )}
  </div>
  );
};

export default AllPeeps;
