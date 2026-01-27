import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const MainLayout = () => {
  console.log("MainLayout rendered \/");
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MainLayout