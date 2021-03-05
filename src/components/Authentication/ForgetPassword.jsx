import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import TextInput from '../common/TextInput';
import { toast } from "react-toastify";
import {commonMessages} from '../../constants/commonMessages';
import CloseIcon from '../common/CloseIcon';
import LoaderIcon from '../common/LoaderIcon';
import Vsite from '../../images/Vsite.png';
import './index.scss';

const ForgetPassword = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const dispatch = useDispatch();

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
                console.log(values);
                toast("We have sent a link to reset your password. please Check Mail", {
                  closeButton: CloseIcon,
                  className: commonMessages.success,
                });
                // toast(<>Some kind of Message<LoaderIcon /></>, {
                //   closeButton: false,
                //   className: commonMessages.uploadImg,
                // });
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
    </>
  );
};

export default ForgetPassword;
