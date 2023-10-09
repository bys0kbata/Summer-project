import { useNavigate } from "react-router-dom";

export default function isAuth(){
    const isAuth = localStorage.getItem("isAuth");
    if(isAuth == "true") return true
    else if(isAuth == "false") return false
}