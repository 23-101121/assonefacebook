import React from 'react';
import "./Leftsidebar.css";

import watchIcon from "../assets/watch.png"; 
import groupImage from "../assets/Rectangle 26.png";
const Leftsidebar = () => {
    return ( 
        <div className="left-sidebar">
      
      <div className="left-btn-container">
         <button className="left-confirm-btn">Confirm</button>
      </div>

     
      <ul className="left-menu-list">
        <li className="left-menu-item">
          <img src={watchIcon} alt="Watch" />
          <span>Watch</span>
        </li>
        <li className="left-menu-item">
          <img src={watchIcon} alt="Watch" />
          <span>Watch</span>
        </li>
        <li className="left-menu-item">
          <img src={watchIcon} alt="Watch" />
          <span>Watch</span>
        </li>
      </ul>

      <div className="left-section-header">
        <h3>Title</h3>
        <a href="#see-all">See all</a>
      </div>

      <ul className="left-group-list">
        <li className="left-group-item">
          <img src={groupImage} alt="Group" />
          <span>UI / UX Designers & Developers</span>
        </li>
        <li className="left-group-item">
          <img src={groupImage} alt="Group" />
          <span>UI / UX Designers & Developers</span>
        </li>
        <li className="left-group-item">
          <img src={groupImage} alt="Group" />
          <span>UI / UX Designers & Developers</span>
        </li>
        <li className="left-group-item">
            <img src={groupImage} alt="Group" />
            <span>UI / UX Designers & Developers</span>
        </li>
      </ul>
    </div>
  );
   
}
 
export default Leftsidebar;