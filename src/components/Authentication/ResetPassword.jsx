import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { resetPassword } from "../../actions/authAction";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../common/TextInput";
import { useQuery } from "../../helpers/getQuery";
import { resetPasswordMessages } from "../../constants/validationMessages";
import "./index.scss";
import Logo from "../../images/blue-logo.svg";

const ResetPassword = (props) => {
  let query = useQuery();
  const [loading, setLoading] = useState(true);
  const storeLoader = useSelector((state) => state.auth.loading);
  let history = useHistory();
  let { userId } = useParams();

  React.useEffect(() => {
    if (!userId) {
      history.push("/");
    }
    setLoading(false);
  }, []);

  return (
    <>
      <section className="main-authaticatoin-wraper">
        <div className="auth-center-segment">
          <div className="auth-logo-top">
            <img src={Logo} alt="logo" />
          </div>
          <div className="auth-form-field-section">
            <Formik
              initialValues={{ newPassword: "", confirmPassword: "" }}
              onSubmit={(values, { setSubmitting }) => {
                props.resetPassword({
                  newPassword: values.newPassword,
                  userId,
                });
                setSubmitting(false);
              }}
              validationSchema={Yup.object().shape({
                newPassword: Yup.string().required(
                  resetPasswordMessages.newPasswordRequired
                ),
                confirmPassword: Yup.string()
                  .required(resetPasswordMessages.confirmPasswordRequired)
                  .when("newPassword", {
                    is: (val) => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                      [Yup.ref("newPassword")],
                      "Both password need to be the same"
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
                  <form className="authatication-form" onSubmit={handleSubmit}>
                    <div className="inner-authaticatio-form">
                      <div className="form-group">
                        <p className="text-center">Reset Password</p>
                      </div>
                      <TextInput
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.newPassword}
                        touched={touched.newPassword}
                        icon={
                          <div className="auth-icons">
                            <i className="icon-lock"></i>
                          </div>
                        }
                      />
                      <TextInput
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        icon={
                          <div className="auth-icons">
                            <i className="icon-lock"></i>
                          </div>
                        }
                      />
                      <div className="form-group text-center">
                        <button
                          disabled={storeLoader}
                          type="submit"
                          className="blue-btn"
                        >
                          {" "}
                          Submit{" "}
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
    </>
  );
};

export default connect(null, {
  resetPassword,
})(ResetPassword);
