import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import AddPeep from "./components/AddPeep.jsx";
import AllPeeps from "./components/AllPeeps.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from './components/Home.jsx'
import Logout from "./components/Logout.jsx";
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
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Home/><Navbar/></>}/>
        <Route path="/peep" element={<><AddPeep updatePeeps={updatePeeps}/><AllPeeps peeps={peeps} updatePeeps={updatePeeps}/><Logout/></>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<><Login setLoggedIn={setLoggedIn} setUser={setUser}/></>} />
      </Routes>
    </Router> 
);
}

export default App;
