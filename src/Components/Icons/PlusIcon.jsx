import React from "react";
import Plus from "./plusIcon.png";
import PlusStyle from "./PlusIcon.module.css";
const PlusIcon = ({ setModalPopUp }) => {
  const clickHandler = () => {
    setModalPopUp(true);
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
