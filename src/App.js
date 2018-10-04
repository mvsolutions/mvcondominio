import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthentication from "./components/withAuthentication";

// import Navigation from "./Navigation";
import LandingPage from "./views/LandingPage/LandingPage";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/SignIn";
import PasswordForgetPage from "./components/PasswordForget";
import HomePage from "./components/Home";
import AccountPage from "./components/Account";
import LoginPage from "./views/LoginPage/LoginPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";

import * as routes from "./constants/routes";

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
      <Route exact path={routes.PROFILE_PAGE} component={ProfilePage} />
    </Switch>
    {/* </div> */}
  </Router>
);

export default withAuthentication(App);
