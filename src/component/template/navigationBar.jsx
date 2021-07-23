import React from "react";
import { container, item } from "@css/testTemplate.module.css";
import CommonButton from "@button/commonButton";
import MainMenu from "@menu/mainMenu";

function NavBar() {
  return (
    <div className={`${container}`}>
      <div className={`${item}`}>Theme</div>
      <div className={`${item}`}>
        <MainMenu />
      </div>
      <div className={`${item}`}>
        <CommonButton btnValue={"Hello!"} />
      </div>
    </div>
  );
}

export default NavBar;
