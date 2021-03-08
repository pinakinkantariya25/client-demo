<<<<<<< HEAD
import { combineReducers } from "redux";

import authReducers from "./auth";

const Reducers = combineReducers({
  auth: authReducers,
});

export default Reducers;
=======
import { combineReducers } from "redux";

import authReducers from "./auth";
import snackbarReducers from "./snackbar";

const Reducers = combineReducers({
  auth: authReducers,
  snackbar: snackbarReducers
});

export default Reducers;
>>>>>>> api-redux
