import { useState } from "react";
import { Form, Navigate, useNavigate,NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import styles from './all.module.css';
import TextField from '@mui/material/TextField';
const Login = ()=>{
    const navigate = useNavigate();
    const {loggedInUsers,login} = useAuth(); 
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
        console.log(loginFormData)
        console.log(loggedInUsers)
        const users = JSON.parse(localStorage.getItem('users'))||[];
       const foundUser = users.find(usr=>usr.email === loginFormData.email && usr.password === loginFormData.password)
        if(foundUser){
            console.log(foundUser)
            alert("Login Successful");
            login(foundUser);
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
                      onChange={onHandleChange}
                    />
                     <TextField
                      required
                      id="password"
                      label="Password"
                      type="text"
                      onChange={onHandleChange}
                    />
                    <button type="submit">Login</button>
                    <p>Create new account?</p><NavLink to="/">Sign Up</NavLink>
                </div>
        </form>
        
      
    )
}
export default Login;