import axios from "axios";
import { useState, useEffect } from "react";
import "./css/stylesallvolonterevent.css"
import isAuth from "./hook/isAuth";
import { Navigate } from "react-router-dom";

export default function AllVolonterEvents(){
    const [result, setResult] = useState([]);
    const eventId =()=>{

        var url= document.location.href;
        var matches = url.match(/\/(\d+)\//);
        if(matches && matches.length >1)
        {
            var id=matches[1];
            return id
        }
    }


    useEffect(()=>{
        axios.get("http://localhost:8082/event/users",{headers:{
            "eventId" : eventId()
        }})
        .then(res =>{
            setResult(res.data);
        })
    },[])
    if(isAuth()) return(
        <div className="ListVolEvent">
            <h1>Все волонтеры данного мероприятия</h1>
            <table>
                <tr>
                    <th>Номер участника</th>
                    <th>Фамилия участника</th>
                    <th>Имя участника</th>
                    <th>Отчество участника</th>
                    <th>Контактные данные участника</th>
                </tr>
                {result.map(e =>{
                    var cot =0
                    return (
                        <tr>
                    <td>{e.lastName}</td>
                    <td>{e.firstName}</td>
                    <td>{e.patronymic}</td>
                    <td>{e.contactDetails}</td>
                </tr>
                    )
                })}
            </table>
        </div>
    )
    else return(<Navigate to="/login" />)
}