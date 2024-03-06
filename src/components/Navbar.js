import React from "react";
import "../styles/Navbar.scss";
import Sidebar from "./sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-details-wrapper">
          <span className="navbar-details">Isim</span>
          <span className="navbar-details">Tel no</span>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
