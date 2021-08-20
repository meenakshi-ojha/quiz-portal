import React from "react";
export const Button = props => (
  <button className="button" onClick={props.onClick} {...props}>
    {props.children}
  </button>
);
