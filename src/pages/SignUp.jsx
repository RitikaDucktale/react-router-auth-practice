import { useState, Suspense } from "react";

import { TextField, Button } from "@mui/material";
import { Form, useNavigate, NavLink } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import styles from "./all.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { isLoggedIn, signedUpUsers } = useAuth();

  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onsubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    signedUpUsers.push(formData);
    console.log(signedUpUsers);
    localStorage.setItem("users", JSON.stringify(signedUpUsers));

    navigate("/login");
  };

  const onHandleChange = (e) => {
    setformData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <>
      <form onSubmit={onsubmitHandler}>
        <div className={styles.formContainer}>
          <TextField
            required
            id="email"
            label="Email"
            onChange={onHandleChange}
            fullWidth
          />
          <TextField
            required
            id="password"
            label="Password"
            type="text"
            onChange={onHandleChange}
            fullWidth
          />
          <TextField
            required
            id="confirmPassword"
            label="ConfirmPassword"
            type="text"
            fullWidth
            onChange={onHandleChange}
          />

          <Button variant="contained" type="submit" fullWidth>
            Sign Up
          </Button>
          <p>
            Already signed in? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </form>
    </>
  );
};
export default SignUp;
