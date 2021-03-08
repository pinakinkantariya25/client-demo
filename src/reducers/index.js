import { combineReducers } from "redux";

import authReducers from "./auth";
import snackbarReducers from "./snackbar";

const Reducers = combineReducers({
  auth: authReducers,
  snackbar: snackbarReducers
});

export default Reducers;