import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MainLayout from '../Layout/MainLayout'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../pages/loginPage'
import SignUp from '../pages/SignUp'
import ProtectedRoutes from './protectedRoutes'
{console.log("Routes rendered \/")}
const routes  = createBrowserRouter([

    {
        path:'/',
        element:<AuthLayout/>,
        children:[
            {index:true,element:<SignUp/>},
            {path:'login',element:<Login/>}
        ]
    },
    {
        element:<ProtectedRoutes/>,
        children:[
            {path:'/dashboard',
            element:<MainLayout/>,
            children:[
                {
                    index:true,
                    path:'home',
                    element:<Home/>
                },
                {
                    path:'about',
                    element:<About/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
            ]
         }
        ]
    },
    {
        path:'/*',
        element:<div>Page not found!!</div>
    }
])
export default routes