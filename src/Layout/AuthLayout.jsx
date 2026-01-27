import {Outlet} from 'react-router-dom';
const AuthLayout = () => {
    return(
        console.log("AuthLayout rendered \/"),
        <Outlet/>
    )
}
export default AuthLayout;