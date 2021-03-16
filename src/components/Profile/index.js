import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";

const Profile = () => {
  return (
    <section className="content-wapper">
      <div className="breadcrumb">
        <ul>
          <li>Profile</li>
        </ul>
      </div>
      <div className="common-panel">
        <div className="panel-head">
          <div className="title">Admin Profile</div>
        </div>

        <Formik
          initialValues={{ firstname: "", lastname: "", email: "", number: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("submit form", values);
          }}
          validationSchema={Yup.object().shape({
            firstname: Yup.string().required("First Name is required"),
            lastname: Yup.string().required("Last Name is required"),
            number: Yup.string().required("Number is required"),
            email: Yup.string().email().required("Email is required"),
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
                        <label>First Name *</label>
                        <TextInput
                          className="form-control"
                          type="text"
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          error={errors.firstname}
                          touched={touched.firstname}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Last Name *</label>
                        <TextInput
                          className="form-control"
                          type="text"
                          name="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          error={errors.lastname}
                          touched={touched.lastname}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Email ID *</label>
                        <TextInput
                          className="form-control"
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          error={errors.email}
                          touched={touched.email}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="vrow">
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Contact Number *</label>
                        <TextInput
                          className="form-control"
                          type="text"
                          name="number"
                          value={values.number}
                          onChange={handleChange}
                          error={errors.number}
                          touched={touched.number}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-12">
                      <div className="password-btn">
                        <Link
                          to="/profile/change-password"
                          style={{ display: "inline-block" }}
                        >
                          <button type="button" className="blue-btn">
                            <i className="icon-change-password"></i>Change
                            Password
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <button type="submit" className="blue-btn">
                    Update
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};
export default Profile;
