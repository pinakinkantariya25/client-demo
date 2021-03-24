import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import AuthService from "./services/authService";
import PublicLayout from "./containers/PublicLayout";
import AdminLayout from "./containers/AdminLayout";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import SignIn from "./components/Authentication/SignIn";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import ResetPassword from "./components/Authentication/ResetPassword";
import ResetRedirect from "./components/Authentication/ResetRedirect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userId = AuthService.getUserId();
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  const userId = AuthService.getUserId();
  return (
    <Route
      {...rest}
      render={(props) =>
        !userId ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ({ childProps }) => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        draggable={false}
        closeOnClick={false}
        autoClose={6000}
      />
      <Router history={history}>
        <Switch>
          <PublicRoute path="/sign-in" component={PublicLayout(SignIn)} exact />
          <PublicRoute
            path="/forgot-password"
            exact
            component={PublicLayout(ForgetPassword)}
          />
          <PublicRoute
            path="/reset-password/:userId"
            exact
            component={PublicLayout(ResetPassword)}
          />
          <PublicRoute path="/redirect" component={ResetRedirect} />
          <PrivateRoute path="/" exact component={AdminLayout(Profile)} />
          <PrivateRoute
            path="/profile"
            exact
            component={AdminLayout(Profile)}
          />
          <PrivateRoute
            path="/profile/change-password"
            exact
            component={AdminLayout(ChangePassword)}
          />
          <Redirect from="*" to="/sign-in" />
        </Switch>
      </Router>
    </div>
  );
};
