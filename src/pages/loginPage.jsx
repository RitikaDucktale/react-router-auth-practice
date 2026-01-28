import { useState } from "react";
import { Form, Navigate, useNavigate,NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import styles from './all.module.css';
import {TextField,Button} from '@mui/material';
const Login = ()=>{
    const navigate = useNavigate();
    const {loggedInUsers,login,isLoggedIn,setIsLoggedIn} = useAuth(); 
    // console.log(users);
    const [loginFormData,setLoginFormData] = useState({
        email:"",
        password:""
    });
    const onHandleChange = (e)=>{
        setLoginFormData({
            ...loginFormData,
            [e.target.id]:e.target.value
        })
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'))||[];
       const foundUser = users.find(usr=>usr.email === loginFormData.email && usr.password === loginFormData.password)
        if(foundUser){ 
            const authUser = {...foundUser,token:true}
            console.log("login====",authUser)
            localStorage.setItem('authUser',JSON.stringify(authUser));
              login(authUser);
              setIsLoggedIn(true)
         alert("Login Successful");
            navigate('/dashboard');   
        }else{
            alert('User not found, please sign up first');
        }
    }
    return(
     
        <form onSubmit={(e)=>onSubmitHandler(e)}  >
             <div className={styles.formContainer} >
                    <TextField
                      required
                      id="email"
                      label="Email"
                      fullWidth
                      onChange={onHandleChange}
                    />
                     <TextField
                      required
                      id="password"
                      label="Password"
                      type="text"
                      fullWidth
                      onChange={onHandleChange}
                    />
                    <Button variant="contained" fullWidth type="submit">Login</Button>
                    <p>Create new account? <NavLink to="/">Sign Up</NavLink></p>
                </div>
        </form>
        
      
    )
}
export default Login;