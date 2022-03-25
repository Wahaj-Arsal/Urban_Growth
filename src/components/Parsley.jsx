import React from "react";
import parsley from "../assets/images/parslet.png";
import "../styles/butterlettuce.scss";

export default function Parsley() {
  return (
    <div className="veg">
      <div className="veg__container">
        <div className="image__container">
          <img className="information__image" src={parsley} />
        </div>
        <h1 className="veg__title">Parsely</h1>
        <div className="veg__stats">
          <div className="veg__info">
            <h2 className="information__title">12-14 Weeks</h2>
            <p className="veg__info-title">Avg Grow Time</p>
          </div>
          <div className="veg__info">
            <h2 className="information__title">6.0</h2>
            <p className="veg__info-title">Soil pH</p>
          </div>
          <div className="veg__info">
            <h2 className="information__title">6+ Hours</h2>
            <p className="veg__info-title">Sunlight</p>
          </div>
        </div>
      </div>
      <main className="information">
        <div className="information__container">
          <h3 className="information__title">General</h3>
          <p className="information__text">
            Parsley is a biennial plant with bright green, feather-like leaves
            that is in the same family as dill. Here’s how to grow parsley in
            your own garden. Be sure to keep parsley plants sufficiently
            watered, especially through the heat of summer. Lightly mulch around
            the plants to conserve moisture.
          </p>
        </div>
        <div className="consumption">
          <h3 className="information__title">Energy Consumption</h3>
          <div className="consumption__container">
            <div className="consumption__element">
              <p className="consumption__title">Water</p>
              <p className="consumption__info--yellow">Medium</p>
            </div>
            <div className="consumption__element">
              <p className="consumption__title">CO2</p>
              <p className="consumption__info--red">Low</p>
            </div>
            <div className="consumption__element">
              <p className="consumption__title">Footprint</p>
              <p className="consumption__info">Good</p>
            </div>
          </div>
        </div>
        <div className="information__container">
          <h3 className="information__title">Harvesting</h3>
          <p className="information__text">
            When the leaf stems have at least three segments, parsley is ready
            to be harvested. Cut leaves from the outer stems of the plant
            whenever you need them. Leave the inner portions of the plant to
            mature. Ideally, allow 2 to 3 weeks for regrowth between major
            harvests.
          </p>
        </div>
        <button className="button">
          <span>+</span> Add to My Garden
        </button>
      </main>
    </div>
  );
}
