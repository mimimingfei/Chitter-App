import { useEffect, useState } from "react";
import axios from "axios";
import Peep from './Peep';

const AllPeeps = () => {
  const [allPeeps, setAllPeeps] = useState([]);

  const getPeepsData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/allPeeps`);
      setAllPeeps(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => { getPeepsData() }, []);

  const displayPeeps = allPeeps.slice(0).reverse().map((peep) => (
    <Peep
      key={peep.id}
      firstName={peep.firstName}
      lastName={peep.lastName}
      peepContent={peep.peepContent}
      peepCreatedTime={peep.peepCreatedTime}
    />
  ));
  return (
    <>
      {displayPeeps.length > 0 ? (
        <>{displayPeeps}</>
      ) : (
        <p>No Peeps</p>
      )}
    </>
  );
};

export default AllPeeps;
