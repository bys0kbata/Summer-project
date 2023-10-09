import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import NotFound from "./Pages/Not Found.jsx"
import Main from"./Pages/Main.jsx"
import ProfileUser from "./Pages/ProfileUser.jsx"
import AllEvents from "./Pages/AllEvents.jsx"
import VoluApplica from "./Pages/VoluApplica.jsx"
import EventProfile from "./Pages/EventProfile.jsx"
import AllVolonterEvents from "./Pages/AllVolonterEvents.jsx"
import EdiEvent from "./Pages/editEvent.jsx"
import EditProfile from "./Pages/editProfile.jsx"
import Logout from "./Pages/Logout.jsx"
import MyEvents from "./Pages/MyEvents.jsx"

export default function App(){
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<ProfileUser />}/>
          <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/allevents" element={<AllEvents />}/>
        <Route path="/myevents" element={<MyEvents />}/>
        <Route path="/voluapplica" element={<VoluApplica />}/>
        <Route path="/eventprofile/:id" element={<EventProfile />}/>
          <Route path="/eventprofile/:id/allvolonterevent" element={<AllVolonterEvents />}/>
          <Route path="/eventprofile/:id/edit" element={<EdiEvent />}/>
        <Route path="*" element={<NotFound />}/>
       </Routes>
  
     )
  }