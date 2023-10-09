import axios from "axios"
import { useEffect, useState } from "react"
import "./css/stylesallevents.css"
import { Navigate, useNavigate } from "react-router-dom";
import isAuth from "./hook/isAuth";


export default function AllEvents(){
    const [result, setResult] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8082/events")
        .then(res =>{
            setResult(res.data);
            
        })
    },[])
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate("/eventprofile")
      }
      function handleRetVollapp(){
        navigate("/voluapplica")
      }
      function handleRetMyEvent(){
        navigate("/myevents")
      }
      if(isAuth()) return(
        <div className="Eventsa">
            <h1 className="LogoNme">Ближайшие мероприятия</h1>
            <div className="allbtn">
                <button onClick={handleRetVollapp}>+</button>
                <button onClick={handleRetMyEvent} >Мой мероприятия</button>
            </div>
            <div className="AllEvents">
                {
                    result.map(function back(res){
                        return(
                            <div className = "Event">
                    <span className="NameEvent">{res.name}</span>
                    <span>Дата и время проведения:</span>
                    <span>{res.startTime}</span>
                    <span>Место мероприятия:</span>
                    <span>{res.location}</span>
                    <span>Организатор:</span>
                    <span>{res.firstName}</span>
                    <a href={"/eventprofile/"+res.eventId} className="btnAllEvents" >Подробнее</a>              
                </div>
                        )
                    })
                }               

            </div>
        </div>
    )
    else return(<Navigate to="/login" />)
}