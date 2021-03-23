import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { setSnackbar } from "../../../actions/snackBarAction";
import './index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const CustomizedSnackbars = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
  const snackbarPosition = useSelector(state => state.snackbar.snackbarPosition);
  const snackbarType = useSelector(state => state.snackbar.snackbarType);
  const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(
      false,
      { vertical: 'top', horizontal: 'center' },
      snackbarType,
      snackbarMessage
    ));
  };

  return (
    <div className={classes.root}>
      <Snackbar
        // autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={snackbarPosition}
        message={snackbarMessage}
        open={snackbarOpen}
        className={snackbarType === 'success' ? 'success-message' : 'error-message'}
        action={
          <button className="cross-btn" onClick={handleClose}>
            <i className="icon-close"></i>
          </button>
        }
        TransitionProps={{
          appear: false,
        }}
      ></Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
