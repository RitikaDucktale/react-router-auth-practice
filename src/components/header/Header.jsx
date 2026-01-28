import React from 'react'
import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar'
import styles from "./Header.module.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
const Header = () => {
  const {user,logout} = useAuth();
  const navigate = useNavigate();
    const onclickHandler = () =>{
      logout();
        // console.log(loggedInUsers)  
      localStorage.removeItem('authUser') 
      navigate('/');
      
    }
  return (  
    <div className={styles.container}>
        <Logo/>
        <Navbar/>
        <div>
            <Button variant="contained" onClick={onclickHandler} className={styles.btn}>Log Out</Button>
        </div>
    </div>
  )
}

export default Header