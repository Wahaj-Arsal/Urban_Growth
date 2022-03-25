/** @format */

import React from "react";

import "./Footer.scss";
import discover from "../assets/icons/Search_alt.png";
import dashboard from "../assets/icons/darhboard.png";
import MyGarden from "../assets/icons/tabler_plant.png";

export default function Footer() {
  return (
    <nav className="navbar-container">
      <button type="button" className="navbar__button">
        <img src={discover} />
        <h4 className="navbar__title">Explore</h4>
      </button>
      <button type="button" className="navbar__button">
        <img src={MyGarden} />
        <h4 className="navbar__title">My Garden</h4>
      </button>
      <button type="button" className="navbar__button">
        <img src={dashboard} />
        <h4 className="navbar__title">Dashboard</h4>
      </button>
    </nav>
  );
}
