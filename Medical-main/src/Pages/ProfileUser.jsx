import axios from "axios"
import { useEffect, useState } from "react"
import "./css/stylesprofile.css"
import Logo from"./img/1646346868_4-abrakadabra-fun-p-standartnaya-avatarka-standoff-13.png"
import { Navigate, useNavigate } from "react-router-dom"
import isAuth from "./hook/isAuth"

export default function ProfileUser(){
    const navigate = useNavigate();
    const [result, setResult] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5656/test")
        .then(res =>{
            setResult(res.data);
        })
    })
    function handleNav(){
        navigate("/profile/edit")
    }

   if(isAuth()) return(
    <div className="Profile">
        <div className="main__title">
          <h1>Личный кабинет userName</h1> 
        </div>
        <div className="main__profile">

            <div className="profile_info">
            <div className="profile_img">
                <div className="img_circle">
                    <img src={Logo}></img>
                </div>
            </div>
            <div className="infouser">
                {result.map(e=> {
                    return(
                        <div className="infouser">
                             <div className="provile_surname">Фамилия</div>
                <div className="profile_name">Имя</div>
                <div className="profile_middlename">Отчество</div>
                <div className="profile_nickname">Ник</div>
                <div className="prifile_gender">Пол</div>
                <div className="profile_number">Номер</div>
                <div className="profile_about">О себе</div>
                <div className="profile_btn">
            <input  type="button" value="Изменить" onClick={handleNav}className="profile_btn-text" />
        </div>
                             </div>
                    )
                })}
                 </div>
            </div>
           
    </div>
    </div>)
    else return(<Navigate to="/login" />)
}