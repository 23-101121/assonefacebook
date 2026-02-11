import React from 'react';
import "./Nav.css"; 
import logoImg from "../assets/logo1.png";
import vectorImg from "../assets/homelogo.png";

const Nav = () => {
    return ( 
        <nav className="nav">
            <div className="nav-logo">
                
                <img src={logoImg} alt="Logo" />
            </div>
            <ul className="nav-menu"> 
                <li><img src={vectorImg} alt="Icon" /></li>
                <li><img src={vectorImg} alt="Icon" /></li>
                <li><img src={vectorImg} alt="Icon" /></li>
                <li><img src={vectorImg} alt="Icon" /></li>
            </ul>
        </nav>
    );
}

export default Nav;