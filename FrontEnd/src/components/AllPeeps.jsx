import { useEffect, useState } from "react";
import axios from "axios";
import Peep from './Peep/Peep';

const AllPeeps = () => {
  
  const [allPeeps, setAllPeeps] = useState([]);

  const getPeepsData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000`);
      setAllPeeps(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => { getPeepsData() }, []);

  const displayPeeps = allPeeps.length > 0
  ? allPeeps.slice(0).reverse().map((peep) => (
      <div key={peep.id}>
        <Peep
          firstName={peep.firstName}
          lastName={peep.lastName}
          peepContent={peep.peepContent}
          peepCreatedTime={peep.peepCreatedTime}
        />
      </div>
    ))
  : <p>No Peeps</p>;

  return displayPeeps;
  

};

export default AllPeeps;
