import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from './history';
import Profile from "./components/Profile";
import Home from "./components/Home";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import SignIn from './components/Authentication/SignIn';
import ForgetPassword from './components/Authentication/ForgetPassword';
import ResetPassword from './components/Authentication/ResetPassword';
import ResetRedirect from './components/Authentication/ResetRedirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.auth ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default ({ childProps, userId }) => {
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
          <Route path="/sign-in" component={SignIn} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:userId" component={ResetPassword} />
          <Route path="/redirect" component={ResetRedirect} />
          <Route path="/" auth={userId}>
            <Home>
              <Switch>
                <PrivateRoute
                  path="/profile"
                  exact
                  auth={userId}
                  component={Profile}
                />
                <PrivateRoute
                  path="/profile/change-password"
                  exact
                  auth={userId}
                  component={ChangePassword}
                />
              </Switch>
            </Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
