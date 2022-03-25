import React from "react";
import MineralLevels from "./MineralLevels";
import Graph from './Graph';

export default function stats() {
    let curr = new Date; // get current date
    let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6
    
    let firstDay = new Date(curr.setDate(first)).toDateString();
    let lastDay = new Date(curr.setDate(last)).toDateString();
  return (
    <div>
      <h1 className="title">Garden Stats</h1>
      <div className="button-container">
        <button className="button">Month View</button>
        <button className="button">Upcoming Crops</button>
      </div>
      <p className="update-bar">Your crop is doing {}</p>
      <MineralLevels />
      <div>
        <h2>Weekly Performance</h2>
        <p>{firstDay} - {lastDay}</p>
      </div>
      <Graph/>
    </div>
  );
}
