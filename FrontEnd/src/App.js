import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import AddPeep from "./components/AddPeep.jsx";
import AllPeeps from "./components/AllPeeps.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><AllPeeps/><AddPeep user={user}/></>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>} />
      </Routes>
    </Router> 
);
}

export default App;
