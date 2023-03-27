import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import AddPeep from "./components/AddPeep.jsx";
import AllPeeps from "./components/AllPeeps.jsx";
import Logout from "./components/Logout.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  // const [allPeeps, setAllPeeps] = useState([]);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<AllPeeps/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>} />
      <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
      <Route path="/allPeeps" element={<allPeeps/>}/>
      <Route path="/addPeep"element={
          // loggedIn ? 
          // <>
          <AddPeep user={user} setUser={setUser}/> 
          // </>
          // : <Login setUser={setUser}/>
        }
      />
    </Routes>
  </Router>
);
}

export default App;
