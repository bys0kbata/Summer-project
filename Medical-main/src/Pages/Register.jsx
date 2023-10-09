import axios from "axios"
import {  useState } from "react"
import "./css/stylesreg.css"
import {  Navigate, useNavigate } from "react-router-dom";
import isAuth from "./hook/isAuth";


export default function Register(){
    const [login,setLogin] = useState(' ');
    const [email,setEmail] = useState(' ');
    const [pass,setPass] = useState(' ');
    const [gender,setGender] = useState(' ');
    const [Name,setName] = useState(' ');
    const [SecondName,setSecName] = useState(' ');
    const [Patronymic,setPatro] = useState(' ');
    const nav = useNavigate();
    const data = {
        "lastName": SecondName,
        "firstName":Name,
        "patronymic":Patronymic,
        "gender":gender,
        "contactDetails":email,
        "login":login,
        "password":pass,
        "role":{
            "role":"VOLUNTEERING"
        }
    };
    async function HandleCklick(e){
        e.preventDefault();
        await axios.post("http://localhost:8082/registration", data)
        nav("/login")
    }

    if(isAuth()) return(
        <Navigate to="/allevents" />
    )
    else return (
        <div className="Register">
        <div className="Reg">
            Регистрация пользователя
            <form onSubmit={HandleCklick}>
            <input placeholder="Фамилия"  onChange={e => setSecName(e.target.value)}></input>
            <input placeholder="Имя"  onChange={e => setName(e.target.value)}></input>
            <input placeholder="Отчество"  onChange={e => setPatro(e.target.value)}></input>
            <input placeholder="Логин"></input>
            <div className="Gender">
                <text>Выберите пол: </text>
            <select name ="gender" onChange={e=> setGender(e.target.value)}>
                <option value="woman" >Женский</option>
                <option value="man">Мужской</option>
            </select>
            </div>
            <input type="password" placeholder="Пароль" onChange={e => setPass(e.target.value)}></input>
            <input type="email" placeholder="Электронная почта" onChange={e => setEmail(e.target.value)}></input>
            <input className="btn" type="submit" value="Зарегистрироваться"></input>
            </form>
        </div>
        </div>
    )
}