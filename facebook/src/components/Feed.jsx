import React from "react";
import "./Feed.css";
import profileImg from "../assets/Ellipse 4.png"; 

import postImg from "../assets/Rectangle 16.png"; 

import landscapeImg from "../assets/landscape.png";  // The mountain image
import profImg from "../assets/prof.png";            // The user profile for the post

import liveIcon from "../assets/camera.png";      
import photoIcon from "../assets/gallery.png";    
import feelingIcon from "../assets/mdi_emoji.png";


const Feed = () => {
    return ( 
        <div className="feed">
    
      <div className="stories-container">
     
        <div className="story-card">
          <div className="story-image-container">
            <img src={postImg} alt="Story" />
          </div>
          <div className="story-footer">
            <div className="story-profile">
              <img src={profileImg} alt="User" />
            </div>
            <h4>Islam Ali</h4>
          </div>
        </div>

     
        <div className="story-card">
          <div className="story-image-container">
            <img src={postImg} alt="Story" />
          </div>
          <div className="story-footer">
            <div className="story-profile">
              <img src={profileImg} alt="User" />
            </div>
            <h4>Islam Ali</h4>
          </div>
        </div>

        <div className="story-card">
          <div className="story-image-container">
            <img src={postImg} alt="Story" />
          </div>
          <div className="story-footer">
            <div className="story-profile">
              <img src={profileImg} alt="User" />
            </div>
            <h4>Islam Ali</h4>
          </div>
        </div>

    
         <div className="story-card">
          <div className="story-image-container">
            <img src={postImg} alt="Story" />
          </div>
          <div className="story-footer">
            <div className="story-profile">
              <img src={profileImg} alt="User" />
            </div>
            <h4>Islam Ali</h4>
          </div>
        </div>
      </div>
      
        <div className="create-post-box">
          <div className="create-post-top">
              <img src={profileImg} alt="Profile" className="user-avatar" />
              <input type="text" placeholder="What's on your mind, Jenny?" />
          </div>
          
          <div className="create-post-bottom">
              <div className="action-item">
                  <img src={liveIcon} alt="Live" className="action-icon" />
                  <span>Live video</span>
              </div>
              <div className="action-item">
                  <img src= {photoIcon} alt="Photo" className="action-icon" />
                  <span>Photo/video</span>
              </div>
              <div className="action-item">
                  <img src={feelingIcon} alt="Feeling" className="action-icon" />
                  <span>Feeling/activity</span>
              </div>
          </div>
        </div><div className="post-card">
          <div className="post-header">
              <div className="post-user-info">
               
                  <img src={profImg} alt="User" /> 
                  <div>
                      <h3>Albert Flores</h3>
                      <span>2 d</span>
                  </div>
              </div>
              <div className="post-options">...</div>
          </div>
          
          <div className="post-content">
           
              <img src={landscapeImg} alt="Mountain Landscape" />
          </div>
        </div>
  
       
        <div className="post-card">
          <div className="post-header">
              <div className="post-user-info">
              
                  <img src={profImg} alt="User" />
                  <div>
                      <h3>Albert Flores</h3>
                      <span>2 d</span>
                  </div>
              </div>
              <div className="post-options">...</div>
          </div>
          
          <div className="post-content">
            
              <img src={landscapeImg} alt="Mountain Landscape" />
          </div>
        </div>
  
 <div className="post-card">
          <div className="post-header">
              <div className="post-user-info">
                
                  <img src={profImg} alt="User" />
                  <div>
                      <h3>Albert Flores</h3>
                      <span>2 d</span>
                  </div>
              </div>
              <div className="post-options">...</div>
          </div>
          
          <div className="post-content">
          
              <img src={landscapeImg} alt="Mountain Landscape" />
          </div>
        </div>

      </div>
     );
}
 
export default Feed;