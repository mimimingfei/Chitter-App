import { useNavigate } from 'react-router-dom';

const Logout = () => {
const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  };

  return (
    <button style={{position: 'absolute', top: '10px', right: '10px'}} onClick={handleLogout}>
    Logout
  </button>
  );
};

export default Logout;
