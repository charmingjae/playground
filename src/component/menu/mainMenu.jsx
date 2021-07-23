import React from "react";
import { menuUlist, menuSubUlist } from "@css/mainMenu.module.css";

function MainMenu() {
  return (
    <ul className={`${menuUlist}`}>
      <li>
        <a href="/">메뉴1</a>
        <ul className={`${menuSubUlist}`}>
          <li>서브메뉴1</li>
          <li>서브메뉴2</li>
          <li>서브메뉴3</li>
        </ul>
      </li>
      <li>메뉴2</li>
      <li>메뉴3</li>
      <li>메뉴4</li>
    </ul>
  );
}

export default MainMenu;
