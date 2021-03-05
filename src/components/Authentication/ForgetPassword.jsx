import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../common/TextInput';
import Snackbar from '@material-ui/core/Snackbar';
import Vsite from '../../images/Vsite.png';
import './index.scss';

const ForgetPassword = () => {
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
              initialValues={{ email: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log('Logging in', values);
                  setAlertOpen(true);
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required('Email is required'),
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
                        <p className="text-center">
                          Enter your registered email address
                        </p>
                      </div>
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
                      <div className="form-group text-center">
                        <button type="submit" className="blue-btn">Submit</button>
                      </div>
                      <div className="form-group-btn text-center">
                        <Link to="/sign-in" className="sign-in">
                          Sign In
                        </Link>
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
        message="We have sent a link to reset your password. please Check Mail"
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

export default ForgetPassword;
