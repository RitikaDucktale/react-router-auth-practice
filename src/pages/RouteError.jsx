import { replace, useNavigate, useRouteError } from "react-router-dom";
import {Button} from '@mui/material'
import styles from "./all.module.css"
const RouteError = ()=>{
    const error = useRouteError();
    const navigate = useNavigate();
    const onclickHandler = ()=>{
        navigate('/dashboard',{replace:true}) // to navigate to given url and replace current entry with it
        
    }
    return(
        <div className={styles.errorElement}>
            <p>Something went wrong!! RouteError</p>
            <h3>Error: {error.message || "unknown error"}</h3>
            <Button variant="contained" onClick={onclickHandler}>Try again</Button>
        </div>
    )
}
export default RouteError;