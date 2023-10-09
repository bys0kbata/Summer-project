import { Navigate, useNavigate } from "react-router-dom"
import isAuth from "./hook/isAuth"
import axios from "axios"
import { useState } from "react";


export default function EdiEvent(){  
    const [nameEvent, setnameEvent] = useState();
    const[dataEvent,setData] = useState();
    const [locationEvent, setLocEvent]=useState();
    const[aboutEvent, setAbEvent] = useState();
    const [VolVal, setVolVal]= useState();
    const [aboutrr, setAboutrr]= useState();
    const [idevent,setidevet] = useState();
    const navigate = useNavigate();
    const eventId =()=>{

        var url= document.location.href;
        var matches = url.match(/\/(\d+)\//);
        if(matches && matches.length >1)
        {
            var id=matches[1];
            return id
        }
    }
    const data = {
        "eventId": eventId(),
        "name":nameEvent,
        "startTime":dataEvent,
        "location":locationEvent,
        "description":aboutEvent,
        "category":{"idCategory":1,"categoryName":"test"},
        "completed":false
    }

    async function handleEdit(e){
        e.preventDefault();
       await  axios.put("http://localhost:8082/myevents/change",data)
        navigate("/allevents")
    }
    if(isAuth()) return(
        <div>
            <div className="VoluApp">
                <h1 className="LogoApp">Настройка сбора на мероприятия</h1>
                <form onSubmit={handleEdit}>
                <input type="text" placeholder="Название мероприятия" onChange={e => setnameEvent(e.target.value)}></input>
            <input type="text" placeholder="Дата и время проведения" onChange={e => setData(e.target.value)}></input>
            <input type="text" placeholder="Место проведения " onChange={e => setLocEvent(e.target.value)}></input>
            <input type="text" placeholder="Краткое описание мероприятия" onChange={e => setAbEvent(e.target.value)}></input>
            <input type="text" placeholder="Количество волонтеров" onChange={e => setVolVal(e.target.value)}></input>
            <input type="text" placeholder="О мероприятий" onChange={e => setAboutrr(e.target.value)}></input>
            <input type="submit"className="btn_Vol" value="Сохранить"></input>
                </form>
            </div>
        </div>
    )
    else return(<Navigate to="/login" />)
}