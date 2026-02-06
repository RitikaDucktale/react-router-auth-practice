import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";

import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";

import fetchRandomUser from "../../apis/userApi";
import { useUserContext } from "../../context/UserContext";
import Loader from "../../components/loader/Loader";
const DisplayUsers = lazy(
  () => import("../../components/displayUser/DisplayUsers"),
);

import styles from "./Users.module.css";

const Users = () => {
  console.log('USers jsx renders******')
  const { users, setUsers, isLoading, setLoading } = useUserContext(); //userContext state for storing users

  console.log("users====", users);
  useEffect(()=>{
    console.log("USeEffect runs")
    const getUser = async ()=>{
      try{
        setLoading(true)
     const res = await fetchRandomUser()
       console.log("Api data===",res.data.results)
       const user = res.data.results;
       console.log("user",user)
       setUsers((prev)=>{
        return [...prev,...user];
       });
       setLoading(false)
      }catch(err){
        console.log(err)
      }
    }
    getUser();
  },[])

  const onclickHandler = async () => {
    try {
      setLoading(true);
      const res = await fetchRandomUser();
      console.log("Api data===", res);
      const user = res.data.results;
      console.log("user", user);
      setUsers((prev) => {
        return [...prev, ...user];
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.outerContainer}>
        <Suspense fallback={<Loader />}>
            {isLoading? <Loader />:""} 
             <DisplayUsers />
        </Suspense>
      </div>
      <Button
        variant="contained"
        onClick={onclickHandler}
        style={{
          width: 200,
          height: 30,
          alignSelf: "center",
          marginBottom: 10,
          padding: 20,
        }}
      >
        Load User
      </Button>
    </>
  );
};

export default Users;
