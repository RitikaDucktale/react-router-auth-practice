import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {
   const {loggedInUsers} = useAuth();
   const authUser = localStorage.getItem('authUser') || {};
   if(authUser) console.log('true========')
    
    return loggedInUsers ? <Outlet/> : <Navigate to='/'/>
}
export default ProtectedRoutes