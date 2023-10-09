import { Navigate } from "react-router-dom";

export default function Logout(){
    localStorage.clear();
    localStorage.setItem("isAuth", false)
    
    return(
        <Navigate to="/login" />

    )
}