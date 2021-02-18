import * as actionTypes from "./actionTypes";
import authService from "../services/authService";

const startDetail = () => {
  return {
    type: actionTypes.DETAIL_START,
  };
};

const successDetail = (data) => {
  return {
    type: actionTypes.DETAIL_SUCCESS,
    payload: data,
  };
};
const detailError = (error) => {
  return {
    type: actionTypes.DETAIL_ERROR,
    payload: error,
  };
};

export function getDetail() {
  return (dispatch) => {
    dispatch(startDetail());
    authService
      .getDetail()
      .then((res) => {
        dispatch(successDetail(res));
      })
      .catch((err) => {
        dispatch(detailError(err));
      });
  };
}
