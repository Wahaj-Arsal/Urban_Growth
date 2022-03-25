/** @format */

import React, { Component } from "react";

export default class MineralLevels extends Component {
  state = {
    water: 94,
    oxygen: 80,
    lastWeekWater: 91,
    lastWeekOxygen: 93,
  };
  render() {
    const getNumber = (value) => {
      if (value > 0) {
        return "+" + value;
      } else {
        return value.toString();
      }
    };
    let waterDifference = this.state.water - this.state.lastWeekWater;
    let oxygenDifference = this.state.oxygen - this.state.lastWeekOxygen;

    return (
      <div>
        <article className="tile-container">
          <div className="tile">
            <p className="tile__title">Water Usage</p>
            <p className="tile__stats">{this.state.water}%</p>
            <p className="tile__review">
              <span>{getNumber(waterDifference)}</span> from the last 7 days
            </p>
          </div>
          <div className="tile">
            <p className="tile__title">Oxygen %</p>
            <p className="tile__stats">{this.state.oxygen}%</p>
            <p className="tile__review">
              <span>{getNumber(oxygenDifference)}</span> from the last 7 days
            </p>
          </div>
        </article>
      </div>
    );
  }
}
