import React from "react";

import "./index.css";
let MatchCard = function (props) {
  return (
    <div className="matchCard" onClick={props.onClick}>
      <div className="cardTitle">{props.title}</div>
      <div className="logoSection">
        <img src={props.teamAlogo} className="teamLogo" />
        {props.short_title}
        <img src={props.teamBlogo} className="teamLogo" />
      </div>
    </div>
  );
};

export default MatchCard;
