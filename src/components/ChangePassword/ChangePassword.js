import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";

const ChangePassword = () => {
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
            password: "",
            currentpassword: "",
            reenterpassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("submit form", values);
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .required("Current Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Number and one special case Character"
              ),
            currentpassword: Yup.string()
              .required("New Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Number and one special case Character"
              ),
            reenterpassword: Yup.string()
              .required("Re-enter Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Number and one special case Character"
              ),
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
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          error={errors.password}
                          touched={touched.password}
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
                          name="currentpassword"
                          value={values.currentpassword}
                          onChange={handleChange}
                          error={errors.currentpassword}
                          touched={touched.currentpassword}
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
export default ChangePassword;
