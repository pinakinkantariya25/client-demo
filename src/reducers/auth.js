import * as actionTypes from "../actions/actionTypes";

export const defaultState = {
  loading: false,
  error: null,
  userId: localStorage.getItem('userId'),
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.payload,
        error: null,
      };
    case actionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};