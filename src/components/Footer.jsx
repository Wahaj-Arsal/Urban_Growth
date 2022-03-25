import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.scss';
import discover from "../assets/images/icons/Search_alt.png";
import dashboard from "../assets/images/icons/darhboard.png";
import MyGarden from "../assets/images/icons/tabler_plant.png";

export default function Footer() {
  return (
    <div>
      <nav className="navbar-container">
        <Link to="/explore">
          <button type="button" className="navbar__button">
            <img src={discover} />
            <h4 className="navbar__title">Explore</h4>
          </button>
        </Link>
        <Link to="/mygarden">
          <button type="button" className="navbar__button">
            <img src={MyGarden} />
            <h4 className="navbar__title">My Garden</h4>
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="navbar__button">
            <img src={dashboard} />
            <h4 className="navbar__title">Dashboard</h4>
          </button>
        </Link>
      </nav>
    </div>
  );
}
