import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ChangePassword from "./components/ChangePassword/ChangePassword";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.auth == true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ({ childProps }) => {
  return (
    <div>
      <Switch>
        {/* <Route path="/login" component={JobOrder} /> */}
        <Route path="/" auth={true}>
          <Home>
            <Switch>
              <PrivateRoute
                path="/profile"
                exact
                auth={true}
                component={Profile}
              />
              <PrivateRoute
                path="/profile/change-password"
                exact
                auth={true}
                component={ChangePassword}
              />
            </Switch>
          </Home>
        </Route>
      </Switch>
    </div>
  );
};
