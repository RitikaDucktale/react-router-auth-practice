import React, { useEffect } from 'react'
import { useAuth } from '../auth/AuthContext'
import { Navigate, useNavigate ,Outlet} from 'react-router-dom';
import Login from '../pages/loginPage';

const PublicRoutes = () => {
    const navigate = useNavigate();
    const {loggedInUsers} = useAuth();
console.log('public Routes=======',loggedInUsers)
    // return (authUser?.token)? <Navigate to='/dashboard'/> : <Outlet/>
  return loggedInUsers?.token? <Navigate to='/dashboard'/> : <Outlet/>
}

export default PublicRoutes