import React, { Component, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import axios from "axios";
import authService from "../../services/authService";
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
            reenterpassword: "",
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
            oldPassword: Yup.string()
              .required("Current Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Number and one special case Character"
              ),
            newPassword: Yup.string()
              .required("New Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Number and one special case Character"
              )
              .when("oldPassword", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().notOneOf(
                  [Yup.ref("oldPassword")],
                  "New password and Current password need to be different"
                ),
              }),
            reenterpassword: Yup.string()
              .required("Re-enter New Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Number and one special case Character"
              )
              .when("newPassword", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("newPassword")],
                  "New password and Re-enter new password need to be the same"
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
                        <label>Re-enter new password *</label>
                        <TextInput
                          className="form-control"
                          type="password"
                          name="reenterpassword"
                          value={values.reenterpassword}
                          onChange={handleChange}
                          error={errors.reenterpassword}
                          touched={touched.reenterpassword}
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
