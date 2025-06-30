import React from "react";
import buttonStyle from "./Button.module.css";
const Button = (props) => {
  return (
    <>
      <button
        className={buttonStyle.button}
        type={props.submit || props.button}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
