import React, { useState } from "react";
import './profil.css'

const Profil = () => {
    const [menu, setmenu] = useState(0)
  return (
    <div className="boxprofie">
      <div className="boxinformation">
        <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png" />
        <h1>Anna Sullivan</h1>
        <p>adress</p>
        <button className="btn-logout">Logout</button>
      </div>
      <div className="boxcontent">
        <ul>
          <li onClick={()=>setmenu(0)}>Profile</li>
          <li onClick={()=>setmenu(1)}>Reservation</li>
        </ul>
        <div className="boxcontenu">
            {menu==0?(<>
                <h1>Mes Informations Perso</h1>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="Lastname"/>
                <input type="email" placeholder="Email"/>
                <button className="btn-reserver">Update</button>
            </>):(<>
            <h1>Mes Réservations</h1>
            </>)}
          
        </div>
      </div>
    </div>
  );
};

export default Profil;
