import { Navigate, useNavigate ,Outlet} from 'react-router-dom';

import { useAuth } from '../context/AuthContext'

const PublicRoutes = () => {
    const navigate = useNavigate();
    const {loggedInUsers} = useAuth();
console.log('public Routes=======',loggedInUsers)
  return loggedInUsers?.token? <Navigate to='/dashboard'/> : <Outlet/>
}

export default PublicRoutes