import React from "react";
import Nav from "../components/Nav";
import Leftsidebar from "../components/Leftsidebar"; 
import Rightsidebar from "../components/Rightsidebar";
import "./home.css"; 
import Feed from "../components/Feed";


const Home = () => {
  return (
    <>
      <Nav />
      <div className="home-container">
        
        <Leftsidebar />


        <Feed />

        <Rightsidebar />

      </div>
    </>
  );
};

export default Home;