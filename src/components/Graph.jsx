import React from "react";

import graph from "../assets/images/graph.png";

export default function Graph() {
  return (
    <div className="graph">
      <h3>Graph</h3>
      <img className="graph__image" src={graph} />
    </div>
  );
}
