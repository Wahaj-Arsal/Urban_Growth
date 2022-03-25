import React, { Component } from "react";

export default class MineralLevels extends Component {
  state = {
    water: 94,
    oxygen: 80,
    lastWeekWater: 91,
    lastWeekOxygen: 93
  };
  render() {

   const getNumber = (value) =>{
      if(value>0){
      return '+' + value;}
      else{
        return value.toString();
      }
    }
    let waterDifference = this.state.water-this.state.lastWeekWater;
    let oxygenDifference = this.state.oxygen-this.state.lastWeekOxygen;

    return (
      <div>
        <article className="tile-container">
          <h2>Water %</h2>
          <h1>{this.state.water}%</h1>
          <p><span>{getNumber(waterDifference)}</span> from the last 7 days</p>
        </article>
        <article>
          <h2>Oxygen %</h2>
          <h1>{this.state.oxygen}%</h1>
          <p><span>{getNumber(oxygenDifference)}</span> from the last 7 days</p>
      </article>
      </div>
    );
  }
}
