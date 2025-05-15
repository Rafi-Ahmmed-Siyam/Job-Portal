import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    

    if (loding) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color='#2cf6d1' />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to={'/signin'} state={location?.pathname} />
};

export default PrivetRoute;