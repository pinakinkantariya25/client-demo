import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../actions/authAction";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../common/TextInput";
import { signInMessages } from "../../constants/validationMessages";
import Logo from "../../images/blue-logo.svg";
import "./index.scss";

const SignIn = (props) => {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [submitloading, setSubmitLoading] = useState(false);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  React.useEffect(() => {
    setSubmitLoading(props.auth.loading);
  }, [props.auth]);

  if (loading) return <div>loading...</div>;

  return (
    <section className="main-authaticatoin-wraper">
      <div className="auth-center-segment">
        <div className="auth-logo-top">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="auth-form-field-section">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              props.logIn(values);
              setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email(signInMessages.emailValid)
                .required(signInMessages.emailRequired),
              password: Yup.string().required(signInMessages.passwordRequired),
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
                <form className="authatication-form" onSubmit={handleSubmit}>
                  <div className="inner-authaticatio-form">
                    <TextInput
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email}
                      touched={touched.email}
                      icon={
                        <div className="auth-icons font-email-set">
                          <i className="icon-email"></i>
                        </div>
                      }
                    />
                    <TextInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password}
                      touched={touched.password}
                      icon={
                        <div className="auth-icons">
                          <i className="icon-lock"></i>
                        </div>
                      }
                    />
                    <div className="form-group">
                      <Link to="/forgot-password" className="forgot-password">
                        Forgot Password
                      </Link>
                    </div>
                    <div className="form-group-btn">
                      <button
                        disabled={submitloading}
                        className="blue-btn"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  logIn,
})(SignIn);
