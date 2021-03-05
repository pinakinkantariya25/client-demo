import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../common/TextInput';
import Vsite from '../../images/Vsite.png';
import './index.scss';

const SignIn = () => {
  return (
    <section className="main-authaticatoin-wraper">
      <div className="auth-center-segment">
        <div className="auth-logo-top">
          <img src={Vsite} alt="Vsite" />
        </div>
        <div className="auth-form-field-section">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log('logging in', values);
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Email is invalid').required('Email is required'),
              password: Yup.string()
                .required('Password is required')
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "Must Contain 8 Characters, One Number and one special case Character"
                ),
              })}
            // .min(8, 'Password is too short - should be 8 chars minimum.')
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
                      <button className="blue-btn" type="submit">
                        {' '}
                        Sign In{' '}
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

export default SignIn;
// min 8 char + one special char + one numeric + one char 