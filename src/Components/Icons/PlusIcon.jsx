import React from "react";
import Plus from "./plusIcon.png";
import PlusStyle from "./PlusIcon.module.css";
import Sound from "../Sounds/ui-mouse-click-366460.mp3";
const PlusIcon = ({ setModalPopUp }) => {
  const clickHandler = () => {
    const audio = new Audio(Sound);
    audio.play();
    setModalPopUp(true);
    console.log("Clicked");
  };
  return (
    <div className={PlusStyle.genStyle}>
      <img
        onClick={clickHandler}
        className={PlusStyle.img}
        src={Plus}
        alt="Plus Icon"
      />
    </div>
  );
};

export default PlusIcon;
