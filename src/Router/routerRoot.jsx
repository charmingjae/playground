import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavTemplate from "@template/navTemplate";
import RegisterPage from "@page/registerPage";
import LoginPage from "@page/loginPage";
import MainPage from "@page/mainPage";

function RouterRoot() {
  return (
    <Router>
      <NavTemplate />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/register" render={() => <RegisterPage />} />
        <Route path="/login" render={() => <LoginPage />} />
      </Switch>
    </Router>
  );
}

export default RouterRoot;
