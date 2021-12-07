import React from "react";
import "./Header.css";
import logoUrl from "./logo.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export const Header = (props) => (
  <div className="header">
    <img src={logoUrl} alt="SBS" />
    <div className="dropdown">
      <button className="dropbtn">
        <KeyboardArrowDownIcon />
      </button>
      <div className="dropdown-content">
        {props.link1 instanceof String ? (
          <p>{props.link1}</p>
        ) : (
          <input type="button" onClick={props.link1} value={props.link1data} />
        )}
        <input type="button" onClick={props.link2} value={props.link2data} />
      </div>
    </div>
  </div>
);
