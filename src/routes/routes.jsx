import {Suspense,lazy} from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/users/Users'
import Contact from '../pages/Contact'
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/loginPage'
import SignUp from '../pages/SignUp'
import ProtectedRoutes from './protectedRoutes'
import PublicRoutes from './publicRoutes';
import PageNotFound from '../pages/PageNotFound'
import RouteError from '../pages/RouteError'
{console.log("Routes rendered \/")}
// const Login = lazy(()=> import('../pages/loginPage'))
const routes  = createBrowserRouter([
    {
        element:<PublicRoutes/>,
        children:[
            {
                path:'/', 
                element:<AuthLayout/>,
                children:[
                    {index:true,element:<SignUp/>},
                    {path:'login',element: <Login/> }
                ],
                errorElement:<RouteError/>
            }
        ]
    },
    // {
    //     path:'/',
    //     element:<AuthLayout/>,
    //             children:[
    //                 {index:true,element:<SignUp/>},
    //                 {path:'login',element:<Login/>}
    //             ]
    // },
    {
        element:<ProtectedRoutes/>,
        children:[
            {path:'/dashboard',
            element:<MainLayout/>,
            children:[
                {
                    index:true,
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
        ],
        errorElement:<RouteError/>
    },
    {
        path:'/*',
        element:<div>Page not found!!</div>
    }
])
export default routes