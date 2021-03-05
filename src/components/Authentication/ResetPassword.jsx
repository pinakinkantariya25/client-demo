import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../common/TextInput';
import Snackbar from '@material-ui/core/Snackbar';
import './index.scss';
import Vsite from '../../images/Vsite.png';

const ResetPassword = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = (event, reason) => {
    console.log('closed alerts');
    setAlertOpen(false);
  };

  return (
    <>
      <section className="main-authaticatoin-wraper">
        <div className="auth-center-segment">
          <div className="auth-logo-top">
            <img src={Vsite} alt="logo" />
          </div>
          <div className="auth-form-field-section">
            <Formik
              initialValues={{ newPassword: '', confirmPassword: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log('Logging in', values);
                  setAlertOpen(true);
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                newPassword: Yup.string()
                .required('Password is required')
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "Must Contain 8 Characters, One Number and one special case Character"
                ),
                confirmPassword: Yup.string()
                .required('Password is required')
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "Must Contain 8 Characters, One Number and one special case Character"
                )
                .when("newPassword", {
                  is: val => (val && val.length > 0 ? true : false),
                  then: Yup.string().oneOf(
                    [Yup.ref("newPassword")],
                    "Both password need to be the same"
                  )
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
                        <button type="submit" className="blue-btn">
                          {' '}
                          Submit{' '}
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

      <Snackbar
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Your password has been updated successfully."
        open={alertOpen}
        action={
          <button className="cross-btn" onClick={handleClose}>
            <i className="icon-close"></i>
          </button>
        }
        TransitionProps={{
          appear: false,
        }}
      ></Snackbar>
    </>
  );
};

export default ResetPassword;
