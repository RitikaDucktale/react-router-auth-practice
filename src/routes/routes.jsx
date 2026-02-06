import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/loginPage";
import SignUp from "../pages/SignUp";
import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";
import PageNotFound from "../pages/PageNotFound";
import RouteError from "../pages/RouteError";
import RefUseCase from "../components/refUseCase/refUseCase";
import Loader from "../components/loader/Loader";
// import Users from "../pages/users/Users";
const Users = lazy(()=> import('../pages/users/Users'));

const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { index: true, element: <SignUp /> },
          { path: "login", element: <Login /> },
        ],
        errorElement: <RouteError />,
      },
    ],
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
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "users",
            element: 
            <Suspense fallback={<Loader/>}>
                <Users />
             </Suspense>
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "demo",
            element: <RefUseCase/>,
          },

        ],
      },
    ],
    errorElement: <RouteError />,
  },
  {
    path: "/*",
    element: <div>Page not found!!</div>,
  },
]);
export default routes;
