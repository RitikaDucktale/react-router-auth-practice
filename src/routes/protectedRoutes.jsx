import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import SignUp from '../pages/SignUp';
const ProtectedRoutes = () => {
    // console.log("ProtectedRoutes rendered \/");
    // const {login,loggedInUsers}  = useAuth();
    // console.log(loggedInUsers)
   const {loggedInUsers} = useAuth();
   const authUser = localStorage.getItem('authUser') || {};
   if(authUser) console.log('true========')
    
    return loggedInUsers ? <Outlet/> : <Navigate to='/'/>
}
export default ProtectedRoutes