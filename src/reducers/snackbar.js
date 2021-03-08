import {SET_SNACKBAR} from '../actions/actionTypes';

const initialState = {
  snackbarOpen: false,
  snackbarPosition: { vertical: 'top', horizontal: 'center' },
  snackbarType: "success",
  snackbarMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarPosition, snackbarMessage, snackbarType } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarPosition,
        snackbarType,
        snackbarMessage
      };
    default:
      return state;
  }
};


