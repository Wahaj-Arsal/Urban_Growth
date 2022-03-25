/** @format */

import React from "react";
import { Component } from "react";

import "./MyGarden.scss";

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
          <h1 className="garden__title">My Garden</h1>
        </div>
        <div className="garden__info">
          <p className="garden__heading">Currently Growing</p>
          <div className="garden__sort-container">
            <p className="garden__sort-text">Sort by</p>
            <img className="garden__sort-img" alt="sort button" src={filter} />
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture lettuce">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Butter Lettuce</h3>
              <p className="tile__p">Est. Harvest Date - March 30th, 2022</p>
              <p className="tile__p">Happiness Level - 8.4</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture cabbage">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Cabbage</h3>
              <p className="tile__p">Est. Harvest Date - April 14th, 2022</p>
              <p className="tile__p">Happiness Level - 9.5</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture tomatoes">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Roma Tomatoes</h3>
              <p className="tile__p">Est. Harvest Date - May 20th, 2022</p>
              <p className="tile__p">Happiness Level - 9.8</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture chilli">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Bell Peppers</h3>
              <p className="tile__p">Est. Harvest Date - May 20th, 2022</p>
              <p className="tile__p">Happiness Level - 9.4</p>
            </div>
            <div className="tile__image">
              <img className="tile__arrow" src={arrow} />
            </div>
          </div>
        </div>
        <div className="garden-tile">
          <div className="garden-tile__picture carrots">
            <div className="garden-tile__image "></div>
          </div>
          <div className="tile__information">
            <div className="tile__text">
              <h3 className="tile__h3">Carrots</h3>
              <p className="tile__p">Est. Harvest Date - June 22nd, 2022</p>
              <p className="tile__p">Happiness Level - 8.4</p>
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
