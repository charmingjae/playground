import React from "react";
import RouterRoot from "@router/routerRoot";
import "@css/App.module.css";
import { hot } from "react-hot-loader/root";

const App = () => {
  return (
    <>
      <header>
        <RouterRoot />
      </header>
      <section></section>
    </>
  );
};

export default hot(App);
