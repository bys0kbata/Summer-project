
import { Navigate, useNavigate } from "react-router-dom";
import "./css/stylesvolapp.css"
import isAuth from "./hook/isAuth";
import { useState } from "react";
import axios from "axios";

export default function VoluApplica(){
    const [nameEvent, setnameEvent] = useState();
    const[dataEvent,setData] = useState();
    const [locationEvent, setLocEvent]=useState();
    const[aboutEvent, setAbEvent] = useState();
    const [VolVal, setVolVal]= useState();
    const [aboutrr, setAboutrr]= useState();
    const navigate = useNavigate();
    
    
    const data = {
        "name":nameEvent,
        "startTime":dataEvent,
        "location":locationEvent,
        "description":aboutEvent,
        "category":{"idCategory":1,"categoryName":"test"},
        "completed":false
    }

   async function handleClick(e){
        e.preventDefault();
        await axios.post("http://localhost:8082/event/create",data, {headers: {
            "ID": localStorage.getItem("Id")
        }})
        navigate("/allevents")
    }
    if(isAuth()) return(
        <div className="VoluApp">
            <h1 className="LogoApp">Заявка на регистрацию мероприятия</h1>
           <form onSubmit={handleClick}> 
            <input type="text" placeholder="Название мероприятия" onChange={e => setnameEvent(e.target.value)}></input>
            <input type="text" placeholder="Дата и время проведения" onChange={e => setData(e.target.value)}></input>
            <input type="text" placeholder="Место проведения " onChange={e => setLocEvent(e.target.value)}></input>
            <input type="text" placeholder="Краткое описание мероприятия" onChange={e => setAbEvent(e.target.value)}></input>
            <input type="text" placeholder="Количество волонтеров" onChange={e => setVolVal(e.target.value)}></input>
            <input type="text" placeholder="О мероприятий" onChange={e => setAboutrr(e.target.value)}></input>
            <input type="submit"className="btn_Vol"  value="Зарегистрировать"></input>
           </form>
        </div>
    )
    else return(<Navigate to="/login" />)
}