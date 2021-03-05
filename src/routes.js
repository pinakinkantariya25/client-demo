import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import SignIn from './components/Authentication/SignIn';
import ForgetPassword from './components/Authentication/ForgetPassword';
import ResetPassword from './components/Authentication/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        draggable={false} 
        closeOnClick={false}
        autoClose={6000}
      />
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/forgot-password" component={ForgetPassword} />
        <Route path="/reset-password" component={ResetPassword} />
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
