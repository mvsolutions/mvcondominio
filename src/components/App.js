import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthentication from "./withAuthentication";

import Navigation from "./Navigation";
import LandingPage from "../views/LandingPage/LandingPage";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import LoginPage from "../views/LoginPage/LoginPage";

import * as routes from "../constants/routes";

const App = () => (
  <Router>
    {/* <div>
      <Navigation />

      <hr /> */}
    <Switch>
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.LOGIN} component={LoginPage} />
    </Switch>
    {/* </div> */}
  </Router>
);

export default withAuthentication(App);
