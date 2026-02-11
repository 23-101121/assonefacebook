import React from 'react';
import "./Rightsidebar.css";
import profileImg from "../assets/Ellipse 8.png"; 
import newsImg from "../assets/Rectangle 25.png";

const Rightsidebar = () => {
    return ( 
<div className="right-sidebar">
      
     
      <div className="sidebar-section">
        <div className="section-header">
            <h4>Title</h4>
            <a href="#see-all">See all</a>
        </div>

      
        <div className="request-card">
            <div className="request-info">
                <img src={profileImg} alt="User" className="profile-pic" />
                <div className="user-details">
                    <p className="user-name">Guy Hawkins</p>
                    <span className="time">4H</span>
                </div>
            </div>
            <div className="action-buttons">
                <button className="btn-confirm">Confirm</button>
                <button className="btn-delete">Delete</button>
            </div>
        </div>

      
        <div className="request-card">
            <div className="request-info">
                <img src={profileImg} alt="User" className="profile-pic" />
                <div className="user-details">
                    <p className="user-name">Guy Hawkins</p>
                    <span className="time">4H</span>
                </div>
            </div>
            <div className="action-buttons">
                <button className="btn-confirm">Confirm</button>
                <button className="btn-delete">Delete</button>
            </div>
        </div>
      </div>

      <hr className="divider" />

    
      <div className="sidebar-section">
        <div className="section-header">
            <h4>Title</h4>
            <a href="#see-all">See all</a>
        </div>

       
        <div className="news-item">
            <img src={newsImg} alt="News" className="news-thumb" />
            <div className="news-content">
                <p className="news-title">Twitch apologises as streamers</p>
                <p className="news-desc">Twitch has apologised, after a backlash over new, advertising rules.</p>
                <a href="#more" className="see-more">See more</a>
            </div>
        </div>

       
        <div className="news-item">
            <img src={newsImg} alt="News" className="news-thumb" />
            <div className="news-content">
                <p className="news-title">Twitch apologises as streamers</p>
                <p className="news-desc">Twitch has apologised, after a backlash over new, advertising rules.</p>
                <a href="#more" className="see-more">See more</a>
            </div>
        </div>

      
        <div className="news-item">
            <img src={newsImg} alt="News" className="news-thumb" />
            <div className="news-content">
                <p className="news-title">Twitch apologises as streamers</p>
                <p className="news-desc">Twitch has apologised, after a backlash over new, advertising rules.</p>
                <a href="#more" className="see-more">See more</a>
            </div>
        </div>

      </div>
    </div>
     );
}
 
export default Rightsidebar;