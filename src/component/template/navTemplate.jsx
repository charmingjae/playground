import React from "react";
import { Link } from "react-router-dom";
import { container, item } from "@css/navTemplate.module.css";
import CommonButton from "@button/commonButton";
import MainMenu from "@menu/mainMenu";

function NavTemplate() {
  return (
    <div className={`${container}`}>
      <div className={`${item}`}>
        <a href="/">PlayGround</a>
      </div>
      <div className={`${item}`}>
        <MainMenu />
      </div>
      <div className={`${item}`}>
        <Link to="/login">
          <CommonButton btnValue={"로그인"} />
        </Link>
        <Link to="/register">
          <CommonButton btnValue={"회원가입"} />
        </Link>
      </div>
    </div>
  );
}

export default NavTemplate;
