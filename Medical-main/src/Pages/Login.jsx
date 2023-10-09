import axios from "axios"
import { useEffect, useState } from "react"
import "./css/styleslogin.css"
import { Navigate, useNavigate } from "react-router-dom";
import isAuth from "./hook/isAuth";

export default function Login(){
    const [login, setlogin] = useState(' ');
    const [pass, setpass] = useState(' ');
    const [id,setId] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [result, setResult] = useState([]);
    const data = {
        "login" : login,
        "password" : pass
    }
    function TextError(){

        return(
            <div>Неправильный логин или пароль</div>
        )
    }
     async function handleSubmit(e) {
        e.preventDefault();
     await axios.post("http://localhost:8082/login", data)
     await axios.get("http://localhost:8082/login")
     .then((res)=>{
        console.log(res)
        setId(res.data)
        localStorage.setItem("Id", res.data)
     },[])
        localStorage.setItem("isAuth", true)
        navigate("/allevents")

    }
    if(isAuth()) return(
        <Navigate to="/allevents" />
    )
    else return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
            <span className="logo">Авторизация пользователя</span>
                <input type="email" placeholder="Login"  onChange={e => setlogin(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={e => setpass(e.target.value)}></input>
                <span className="eee">Нет аккаунта?<a href="/registration">Создайте его!</a></span>
                <input type="submit" className="btn_login" value="Войти"></input>
            </form>
        </div>
    )
}