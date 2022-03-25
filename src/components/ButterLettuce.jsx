import React from "react";
import butterLettuce from "../assets/images/butterlettuce.png";
import "../styles/butterlettuce.scss";
import Chart from "../assets/images/Group-21.png";

export default function ButterLettuce() {
  return (
    <div className="veg">
      <div className="veg__container">
        <div className="image__container">
          <img className="information__image" src={butterLettuce} />
        </div>
        <h1 className="veg__title">Butter Lettuce</h1>
        <div className="veg__stats">
          <div className="veg__info">
            <h2 className="information__title">5 days</h2>
            <p className="veg__info-title">Days left to harvest</p>
          </div>
          <div className="veg__info">
            <h2 className="information__title">1-3kg</h2>
            <p className="veg__info-title">CO2 emission</p>
          </div>
          <div className="veg__info">
            <h2 className="information__title">9-12m3</h2>
            <p className="veg__info-title">O2 usage</p>
          </div>
        </div>
      </div>
      <main>
        <div>
          <div className="information__container">
            <h3 className="information__title">Harvesting</h3>
            <p className="information__text">
              Harvest lettuce in the morning when full-size but young and
              tender. Check your garden everyday for ready-to-harvest leaves;
              mature lettuce gets bitter and woody and will go bad quickly.
            </p>
          </div>
        </div>
        <div>
          <h1 className="information__title">Plant Lifecycle</h1>
          <img src={Chart} />
        </div>
        <div className="consumption">
          <h1 className="information__title">Energy Consumption</h1>
          <div className="consumption__container">
            <div className="consumption__element">
              <p>Water</p>
              <p className="consumption__info--yellow">Medium</p>
            </div>
            <div className="consumption__element">
              <p>CO2</p>
              <p className="consumption__info">Low</p>
            </div>
            <div className="consumption__element">
              <p>Footprint</p>
              <p className="consumption__info">Good</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
