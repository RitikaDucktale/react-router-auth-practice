import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Form, useNavigate ,NavLink} from 'react-router-dom';
import styles from './all.module.css';
import { useAuth } from '../auth/AuthContext';
const SignUp = ()=>{
    const navigate = useNavigate();
    const {login} = useAuth();
    const [formData,setformData]  = useState([{
        email:'',
        password:'',
        confirmPassword:''
    }]);


        const onsubmitHandler = (e)=>{
            e.preventDefault();
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(formData);
            localStorage.setItem('users',JSON.stringify(users))
            // console.log(formData);
            // login(formData);
            navigate('/login');
        }

    const onHandleChange = (e)=>{
        setformData({
            ...formData,
            [e.target.id]:e.target.value
        })

    }
    return(
        <>
       
          <form  onSubmit={onsubmitHandler}>
            <div className={styles.formContainer}>
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
         <TextField
          required
          id="confirmPassword"
          label="ConfirmPassword"
          type="text"
          onChange={onHandleChange}
        />

        
         <button type="submit">Sign Up</button>
             <p>Already signed in?</p><NavLink to="/login">Login</NavLink>
            </div>

</form>

</>
    )
}
export default SignUp;