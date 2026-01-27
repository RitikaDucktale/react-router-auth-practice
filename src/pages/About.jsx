import React from 'react'
import styles from "./all.module.css";
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.container}>
      
      About
      <Outlet />
    </div>
  )
}

export default About