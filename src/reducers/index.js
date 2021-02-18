import { combineReducers } from "redux";

import authReducers from "./auth";

const Reducers = combineReducers({
  auth: authReducers,
});

export default Reducers;
