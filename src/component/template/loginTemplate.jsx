import React from "react";
import { hot } from "react-hot-loader/root";
import { divWrapper, divContentWrapper } from "@css/loginTemplate.module.css";

function LoginTemplate() {
  return (
    <div className={`${divWrapper}`}>
      <div className={`${divContentWrapper}`}>Hello Login page</div>
    </div>
  );
}

export default hot(LoginTemplate);
