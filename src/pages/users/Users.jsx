import { Outlet } from 'react-router-dom';
import { useEffect,useContext,createContext, useState } from 'react';
import { Button } from '@mui/material';
import { Suspense,lazy } from 'react';
import api from '../../apis/axios';
import Loader from '../../components/loader/Loader';

import fetchRandomUser from '../../apis/userApi';
import styles from "./Users.module.css";
// import DisplayUsers from './DisplayUsers';

const DisplayUsers = lazy(()=> import('./DisplayUsers'))
const Users = () => {
  const DataContext = createContext();
const [users,setUsers] = useState([]);
const [isLoading,setLoading] = useState(false);

console.log('users====',users)
    useEffect(()=>{
      const getUser = async ()=>{
        try{
          // setLoading(true)
       const res = await fetchRandomUser()
         console.log("Api data===",res.data.results)
         const user = res.data.results;
         console.log("user",user)
         setUsers((prev)=>{
          return [...prev,...user];
         });
        //  setLoading(false)
        }catch(err){
          console.log(err)
        }
      }
      getUser();
    },[])

    const onclickHandler = async ()=>{
        try{
           setLoading(true)
        const res = await fetchRandomUser()
         console.log("Api data===",res)
         const user = res.data.results;
         console.log("user",user)
         setUsers((prev)=>{
          return [...prev,...user];
          })
           setLoading(false)
        }catch(err){
          console.log(err)
        }
      }

  return (
     <div className={styles.outerContainer}>
     <Button variant='contained' onClick={onclickHandler} style={{position:'sticky',top:70,marginTop:5}}>Load User</Button>
         <Suspense fallback={<Loader/>}>
          {/* {isLoading? <Loader/>:} */}
         
          {isLoading? <Loader/> :<DisplayUsers users={users} isLoading={isLoading} setLoading={setLoading}/>}
         </Suspense>
    </div>
  )
}

export default Users