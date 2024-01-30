import React from "react";
import Navbar from "./Navbar";

const Reservation = () => {
  return (
    <div>
    <Navbar />
    <div className="box-reserve">
      <div className="partie-text reser">
        <h1>Time to Reserve</h1>
      </div>
      <div className="box-image">
        <div className="box-form2">
          <div className="box1-input">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder=" ville de départ" />
          </div>

          <div className="box1-input">
            <i class="fa-solid fa-map-location-dot"></i>
            <input type="text" placeholder="ville darrivée" />
          </div>
          <div className="box1-input">
            <i class="fa-solid fa-calendar-days"></i>
            <input type="text" placeholder="calendrier" />
          </div>
          <div className="box1-input">
            <i class="fa-solid fa-users"></i>
            <input type="Number" placeholder="1 passager" />
          </div>
          <button className="btn-reserver">Réserver</button>
        </div>
        <img src="./images/reserve.png" />
      </div>
    </div>
    </div>
  );
};

export default Reservation;
