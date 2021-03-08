import {SET_SNACKBAR} from './actionTypes';

export const setSnackbar = (
  snackbarOpen,
  snackbarPosition,
  snackbarType = "success",
  snackbarMessage = ""
) => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarPosition,
  snackbarType,
  snackbarMessage
});