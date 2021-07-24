import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "@template/navigationBar";
import RegisterPage from "@page/registerPage";
import LoginPage from "@page/loginPage";
import TestPage from "@page/testPage";

function RouterNavBar() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={TestPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterNavBar;
