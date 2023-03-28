import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import AddPeep from "./components/AddPeep.jsx";
import AllPeeps from "./components/AllPeeps.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [peeps, setPeeps]=useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getPeeps= async () => {
      const peepData = await axios.get(process.env.REACT_URL);
      const peepMap = peepData.data.map((n) => ({
        ...n,
      }));
      setPeeps(peepMap);
    };
    getPeeps();
  }, []);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><AddPeep user={user}/><AllPeeps peeps={peeps}/></>} />
        <Route path="/signup" element={<><Navbar/><Signup/></>} />
        <Route path="/login" element={<><Navbar/><Login setLoggedIn={setLoggedIn} setUser={setUser}/></>} />
      </Routes>
    </Router> 
);
}

export default App;
