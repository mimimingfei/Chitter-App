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
  
  const updatePeeps = async () => {
    try {
      const res = await axios.get('http://localhost:4000');
      setPeeps(res.data);
    } catch (error) {
      console.error('Failed to get peeps:', error);
    }
  };
  useEffect(() => {
    updatePeeps();
  }, []); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><AddPeep updatePeeps={updatePeeps}/><AllPeeps peeps={peeps} updatePeeps={updatePeeps}/></>} />
        <Route path="/signup" element={<><Navbar/><Signup/></>} />
        <Route path="/login" element={<><Navbar/><Login setLoggedIn={setLoggedIn} setUser={setUser}/></>} />
      </Routes>
    </Router> 
);
}

export default App;
