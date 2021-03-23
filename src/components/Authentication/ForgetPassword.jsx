import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {useSelector, connect} from 'react-redux';
import * as Yup from 'yup';
import TextInput from '../common/TextInput';
import {forgotPassword} from '../../actions/authAction';
import {commonMessages} from '../../constants/commonMessages';
import CloseIcon from '../common/CloseIcon';
import Vsite from '../../images/Vsite.png';
import './index.scss';

const ForgetPassword = props => {
  let history = useHistory();
  const storeUserId = useSelector(state => state.auth.userId);
  const [loading, setLoading] = useState(true);
  const [submitloading, setSubmitLoading] = useState(false);
 
  React.useEffect(() => {
    if (storeUserId) {
      history.push('/');
    }
    setLoading(false);
  }, []);

  if (loading) return <div>loading...</div>

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
                setSubmitLoading(true);
                props.forgotPassword(values).then(res => {
                  setSubmitLoading(false);
                }).catch(e => setSubmitLoading(false));
                setSubmitting(false);
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email('Email is invalid').required('Email is required'),
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
                        <button disabled={submitloading} type="submit" className="blue-btn">Submit</button>
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

export default connect(null, {
  forgotPassword
})(ForgetPassword);
