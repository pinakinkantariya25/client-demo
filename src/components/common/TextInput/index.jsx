<<<<<<< HEAD
import React from "react";

const TextInput = (props) => {
  const {
    type,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
  } = props;

  return (
    <div className="form-group">
      <div className="inner-form-group">
        <input
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {props.icon ? props.icon : ""}
      </div>
      {error && touched && <div className="form-error">{error}</div>}
    </div>
  );
};

export default TextInput;
=======
import React from 'react';

const TextInput = (props) => {
  const {type, name, placeholder, value, onChange, onBlur, error, touched} = props;

  return (
    <div className="form-group">
      <div className="inner-form-group">
        <input
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {props.icon ? props.icon : ''}
      </div>
      {error && touched && (<div className="form-error">{error}</div>)}
    </div>
  );
};

export default TextInput;
>>>>>>> 040dfa1 (183: Add common alert message)
