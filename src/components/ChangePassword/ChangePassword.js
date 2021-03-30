import React, { Component, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import axios from "axios";
import authService from "../../services/authService";
import { changePasswordMessages } from "../../constants/validationMessages";
import { useSelector, connect } from "react-redux";
import { changePassword } from "../../actions/authAction";

const ChangePassword = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <section className="content-wapper">
      <div className="breadcrumb">
        <ul>
          <li>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </li>
          <li>Change Password</li>
        </ul>
      </div>
      <div className="common-panel">
        <div className="panel-head">
          <div className="title">Change Password</div>
        </div>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            props
              .changePassword({
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
                userId,
              })
              .then((res) => {
                resetForm();
              })
              .catch((error) => {
                // setError(error.response.data.message);
              });
            console.log("submit form", values);
          }}
          validationSchema={Yup.object().shape({
            oldPassword: Yup.string().required(
              changePasswordMessages.oldPasswordRequired
            ),
            newPassword: Yup.string()
              .required(changePasswordMessages.newPasswordRequired)
              .when("oldPassword", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().notOneOf(
                  [Yup.ref("oldPassword")],
                  changePasswordMessages.differentPassword
                ),
              }),
            confirmNewPassword: Yup.string()
              .required(changePasswordMessages.confirmPasswordRequired)
              .when("newPassword", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("newPassword")],
                  changePasswordMessages.samePassword
                ),
              }),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="panel-body admin-profile">
                  <div className="vrow">
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Current Password *</label>
                        <TextInput
                          className="form-control"
                          type="password"
                          name="oldPassword"
                          value={values.oldPassword}
                          onChange={handleChange}
                          error={errors.oldPassword}
                          touched={touched.oldPassword}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>New Password *</label>
                        <TextInput
                          className="form-control"
                          type="password"
                          name="newPassword"
                          value={values.newPassword}
                          onChange={handleChange}
                          error={errors.newPassword}
                          touched={touched.newPassword}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Confirm new password *</label>
                        <TextInput
                          className="form-control"
                          type="password"
                          name="confirmNewPassword"
                          value={values.confirmNewPassword}
                          onChange={handleChange}
                          error={errors.confirmNewPassword}
                          touched={touched.confirmNewPassword}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel-footer">
                  <button className="blue-btn">Change</button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default connect(null, {
  changePassword,
})(ChangePassword);
