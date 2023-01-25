import React from "react";

import "./NavBar.css";


const NavBar = ({ isVisible, setIsVisible }) => {

  return (
    <div id="navbar">
        <div onClick={() => setIsVisible(0)}>
            Home
        </div>
        <div onClick={() => setIsVisible(1)}>
            Serkan SAGLAM
        </div>
        <div onClick={() => setIsVisible(2)}>
            Serkan AKALIN
        </div>
        <div onClick={() => setIsVisible(3)}>
            Fatih SARAYDAR
        </div>
    </div>
  );
};

export default NavBar;
