import React from "react";
export const Register = props => (
  <button className="button" onClick={props.onClick} {...props}>
    {props.children}
  </button>
);
