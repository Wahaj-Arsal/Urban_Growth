import React, { Component } from "react";

export default class MineralLevels extends Component {
  state = {
    water: 45,
    carbonDioxide: 6,
    lastWeekWater: 51,
    lastWeekCarbonDioxide: 5,
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
    let carbonDioxideDifference = this.state.carbonDioxide - this.state.lastWeekCarbonDioxide;

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
            <p className="tile__title">Carbon Dioxide Consumption</p>
            <p className="tile__stats">{this.state.oxygen}%</p>
            <p className="tile__review">
              <span>{getNumber(carbonDioxideDifference)}</span> from the last 7 days
            </p>
          </div>
        </article>
      </div>
    )
  }
}
