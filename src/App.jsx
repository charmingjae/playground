import React from "react";
import TestPage from "@page/testPage";
import NavBar from "@template/navigationBar";
import RouterNavBar from "@router/routerNavBar";
import "@css/App.module.css";

const App = () => {
  return (
    <>
      <header>
        <RouterNavBar />
      </header>
      <section></section>
    </>
  );
};

export default App;
