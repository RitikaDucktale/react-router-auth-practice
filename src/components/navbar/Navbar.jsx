import React from 'react'
import styles from "./Navbar.module.css";
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <ul>
          <li>
            <NavLink style={({isActive})=>{
            if(isActive) return {color:'rgb(9, 69, 201)'};
            else return {color:'black'};
          }} to='/dashboard/home'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/about' style={({isActive})=>{
            if(isActive) return {color:'rgb(9, 69, 201)'};
            else return {color:'black'};
          }}>About</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/contact' style={({isActive})=>{
            if(isActive) return {color:'rgb(9, 69, 201)'};
            else return {color:'black'};
          }}>Contact</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Navbar