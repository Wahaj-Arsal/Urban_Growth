/** @format */

import React from "react";
import { Component } from "react";

// import "./MyGarden.scss";

// import cabbage from "../../assets/images/cabbage";
// import carrots from "../../assets/images/carrots";
// import chilli from "../../assets/images/chilli";
import lettuce from "../../assets/images/lettuce.png";
// import tomatoes from "../../assets/images/tomatoes";
import arrow from "../../assets/images/Arrow_right.png";
import leftArrow from "../../assets/images/Arrow_left.png";
import profile from "../../assets/images/profile.png";
import filter from "../../assets/images/Filter.png";

export default class MyGarden extends Component {
  render() {
    return (
      <section className="garden-container">
        <div className="garden-buttons">
          <div className="garden-buttons__back-container">
            <img
              className="garden-buttons__back"
              alt="back button"
              src={leftArrow}
            />
          </div>
          <div className="garden-buttons__logo-container">
            <img
              className="garden-buttons__logo"
              alt="profile logo"
              src={profile}
            />
          </div>
        </div>
        <div className="garden">
          <h1 className="garden__title">Explore</h1>
        </div>
        <div className="garden__info">
          <p className="garden__heading">Harvest what matters</p>
          <div className="garden__sort-container">
            <p className="garden__sort-text">Sort by</p>
            <img className="garden__sort-img" alt="sort button" src={filter} />
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture parsley">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Parsley</h3>
              <p className="tile__p">Water Needed - Low</p>
              <p className="tile__p">Co2 Reduction - Low</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture strawberry">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Strawberry</h3>
              <p className="tile__p">Water Needed - Low</p>
              <p className="tile__p">Co2 Reduction - Low</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture potatoes">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Potatoes</h3>
              <p className="tile__p">Water Needed - Low</p>
              <p className="tile__p">Co2 Reduction - Low</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture rosemary">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Rosemary</h3>
              <p className="tile__p">Water Needed - Low</p>
              <p className="tile__p">Co2 Reduction - Low</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture garlic">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Garlic</h3>
              <p className="tile__p">Water Needed - Low</p>
              <p className="tile__p">Co2 Reduction - Low</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture beetroot">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Beetroot</h3>
              <p className="tile__p">Water Needed - Low</p>
              <p className="tile__p">Co2 Reduction - Low</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
