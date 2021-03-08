<<<<<<< HEAD
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import SignIn from './components/Authentication/SignIn';
import ForgetPassword from './components/Authentication/ForgetPassword';
import ResetPassword from './components/Authentication/ResetPassword';

export default ({ childProps }) => {
  return (
    <div>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/forgot-password" component={ForgetPassword} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </div>
  );
};
=======
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Snackbar from './components/common/Snackbar';
import SignIn from './components/Authentication/SignIn';
import ForgetPassword from './components/Authentication/ForgetPassword';
import ResetPassword from './components/Authentication/ResetPassword';

export default ({ childProps }) => {
  return (
    <div>
      <Snackbar />
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/forgot-password" component={ForgetPassword} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </div>
  );
};
>>>>>>> api-redux
