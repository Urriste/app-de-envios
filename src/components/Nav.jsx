import React from "react";
import NavIcon from "../img/menu.png";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src={NavIcon} className="burger-icon" alt="burger-icon"></img>
    </div>
  );
};

export default Nav;
