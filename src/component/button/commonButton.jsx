import React from "react";
import "@css/commonButton.module.css";

function CommonButton({ btnValue }) {
  return (
    <div>
      <button>{btnValue}</button>
    </div>
  );
}

export default CommonButton;
