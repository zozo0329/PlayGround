import React from "react";
import HeaderStyle from "./Header.module.css";
import Logo from "./planning.png";
const Header = () => {
  return (
    <>
      <div className={HeaderStyle.header}>
        <div className={HeaderStyle.images}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={HeaderStyle.list}>
          <ul>
            <li>Save list</li>
            <li>Featured</li>
            <li>Unknown</li>
            <li>Unknown</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
