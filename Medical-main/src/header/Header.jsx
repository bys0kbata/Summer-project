import isAuth from "../Pages/hook/isAuth";
import "./css/stylesheader.css";
import logo from "./img/arm.png"
import {Routes, Route} from "react-router-dom"

export default function Header() {
  function MenuBar(){
    if(isAuth()) return(<div className="nav_registration" > 
      <a href="/allevents">Все мероприятия</a>
      <a href="/profile">Профиль</a>
      <a href="/logout" >Выйти</a>
      </div>
    )
    else return(
  <div>

  </div>)
  }

    const ValNo = () => (
      <header className="header">
          <div className="header__left">
              <img className="header__img" src={logo} alt=""></img>
              <div className="header__nav">
                  <a className="nav_registration">SoftHeart</a>
              </div>
          </div>
          <div className="header__right">

            <div className="header__circle"></div>

            <div className="header__text">
                <MenuBar />
                </div>
            </div>
    </header>
      )

  
  return (
 <Routes>
 <Route path="*" element={<ValNo />} />
</Routes>
  );
}
