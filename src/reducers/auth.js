import * as actionTypes from "../actions/actionTypes";

export const defaultState = {
  loading: false,
  data: null,
  error: null,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    case actionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case actionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};