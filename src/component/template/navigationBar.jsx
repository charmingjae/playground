import React from "react";
import { container, item } from "@css/testTemplate.module.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CommonButton from "@button/commonButton";
import MainMenu from "@menu/mainMenu";

function NavBar() {
  return (
    <div className={`${container}`}>
      <div className={`${item}`}>PlayGround</div>
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

export default NavBar;
