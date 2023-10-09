import axios from "axios"
import { useNavigate, Navigate } from "react-router-dom"
import { useEffect,useState } from "react";
import "./css/styleseventprofile.css" 
import logo from "./img/image.png"
import isAuth from "./hook/isAuth";

export default function EventProfile(){
    const [result, setResult] = useState([]);
    const [vol, setVol] = useState([]);
    const eventId = document.location.href.slice(document.location.href.lastIndexOf("/")+1);

    useEffect(()=>{
        axios.get("http://localhost:8082/eventInfo",{ headers:{
            "eventId": eventId
        }})
        .then(res =>{
            setResult(res.data);
        })
        axios.get("http://localhost:8082/event/users",{headers:{
            "eventId" : eventId
        }})
        .then(res =>{
            setVol(res.data);
        })
    },[])
    
    
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate("/eventprofile/"+eventId+"/allvolonterevent");
    }
    function handleSt(e) {
        e.preventDefault();
        navigate("/eventprofile/"+eventId+"/edit");
    }
    function handlejoinEvent(){
        axios.post("http://localhost:8082/",{"ID": localStorage.getItem("Id")}, {headers:{
            "ID": localStorage.getItem("Id")
        }})
    }
    function handlequitEvent(){
        axios.delete("http://localhost:8082/", {headers:{
            "ID": localStorage.getItem("Id")
        }})
    }
    async function handldeleteEvent(){
        await axios.delete("http://localhost:8082/myevents/change/delete", {headers:{
            "eventId": eventId
        }})
        navigate("/allevents")
    }

    function BtnUser(){
        if(false ) 
            return( <button  className="btn_event" onClick={handlejoinEvent}> Участвовать</button>)
        else if(false) 
            return(<button className="btn_event" onClick={handlequitEvent}>Отказаться</button>)
        else 
            return(
        <div className="btn_event">
            <button onClick={handleSubmit}>Посмотреть участников</button>
            <button onClick={handleSt}>Изменить</button>
            <button onClick={handldeleteEvent}>Удалить</button>
        </div>)
    }

    if(isAuth()) return(
        <div className="EventProfile">
            <h1> {result.name}</h1>
            <div className="LsProfile">
                <div className="infoEvent">
                    <img className="logo" src={logo}></img>
                    <p>Организатор:{result.login} <br />Контактные данные: {result.contactDetails} <br />Местоположение мероприятия: {result.location} <br />Время и дата мероприятия: {result.startTime}<br />О мероприятий:{result.eventDescription
}</p>
                </div>
                <BtnUser />
            </div>
        </div>
    )
    else return(<Navigate to="/login" />)
}