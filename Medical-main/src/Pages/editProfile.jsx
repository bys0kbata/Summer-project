import axios from "axios"
import { useState } from "react";
import "./css/stylesreg.css"
import isAuth from "./hook/isAuth";
import { Navigate } from "react-router-dom";

export default function EditProfile(){
    const [email,setEmail] = useState(' ');
    const [pass,setPass] = useState(' ');
    const [gender,setGender] = useState(' ');
    const [Name,setName] = useState(' ');
    const [SecondName,setSecName] = useState(' ');
    const [Patronymic,setPatro] = useState(' ');
    const data = {
        "lastName": SecondName,
        "firstName":Name,
        "patronymic":Patronymic,
        "gender":gender,
        "contactDetails":"",
        "login":email,
        "password":pass,
        "role":{
            "role":"VOLUNTEERING"
        }
    };
    function handlePut(){
        axios.put()
    }
    if(isAuth()) return(
        <div className="Register">
        <div className="Reg">
            Настройка профиля
            <form action="">
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
                <input type="submit" className="btn" value="Сохранить" />
            </form>
        </div>
        </div>
    )
    else return(<Navigate to="/login" />)
}