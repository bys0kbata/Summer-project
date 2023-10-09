import { Navigate } from "react-router-dom"
import isAuth from "./hook/isAuth"

export default function Main(){
    if(isAuth()) return( <Navigate to="/allevents" />)
    else return(<Navigate to="/login" />)

}