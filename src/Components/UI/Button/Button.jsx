import React from "react";
import buttonStyle from "./Button.module.css";
import Sound from "../../Sounds/ui-mouse-click-366460.mp3";
const Button = (props) => {
  const soundHandler = () => {
    const clickSound = new Audio(Sound);
    clickSound.play();
  };
  return (
    <>
      <button
        onClick={soundHandler}
        className={buttonStyle.button}
        type={props.submit || props.button}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
