import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "../../validation";
import { CREATE_USER, SET_SCREEN } from "../../redux/types";

const CreateUserForm = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onUserInput = (e) => {
    const _userInput = { ...userInput, [e.target.name]: e.target.value };
    setUserInput(_userInput);
    const result = validate(2, _userInput);

    setErrors(result);
  };

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      dispatch({
        type: CREATE_USER,
        payload: userInput,
      });

      dispatch({ type: SET_SCREEN, payload: 1 });

      setUserInput({});
    }
  };

  return (
    <>
      <h2>Create a SQOD Account</h2>
      <div className="form create_user_form">
        <div className="form_input_container" onInput={onUserInput}>
          <label htmlFor="name">Name</label>
          <input
            ref={inputRef}
            type="text"
            name="name"
            className="form_input"
            placeholder="Name"
            id="name"
          />
          <p className="error">{errors && errors.name}</p>

          <label htmlFor="Email">Email</label>
          <input
            className="form_input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
          />
          <p className="error">{errors && errors.email}</p>

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="form_input"
            placeholder="Phone Number"
            id="phone"
          />
          <p className="error">{errors && errors.phone}</p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form_input"
            placeholder="Create Password"
            id="password"
          />
          <p className="error">{errors && errors.password}</p>
        </div>

        <button className="btn btn_primary" onClick={onSubmit}>
          Create Account
        </button>
      </div>
    </>
  );
};

export default CreateUserForm;
