import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ setLoggedIn }) => {
    useEffect(() => {
        setLoggedIn(false);
    }, [setLoggedIn]);

    return <Navigate to="/" replace />;
};

export default Logout;