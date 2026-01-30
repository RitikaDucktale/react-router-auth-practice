import React from 'react'
import { Suspense,lazy,useState } from 'react';
// import UserCards from '../../components/userCards/UserCards';
import Loader from '../../components/loader/Loader';
const UserCards = lazy(()=> import('../../components/userCards/UserCards'))
import styles from "./Users.module.css"
const DisplayUsers = (props) => {
    const {users,isLoading,setLoading} = props || {};

  return (
    <div className={styles.cardsContainer}>
        {users.map((user)=>(
            <Suspense fallback={<Loader/>}>
                   {/* {isLoading? <Loader/>:<DisplayUsers users={users}/>}
                    */}
               <UserCards key={user.id.value} user={user}/> 
                
            </Suspense>
        ))}
    </div>
  )
}

export default DisplayUsers