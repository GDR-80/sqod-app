import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_PLAYER } from "../../redux/types";
import { validate } from "../../validation";

const CreatePlayerForm = ({ setModalContent }) => {
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
    const result = validate(1, _userInput);

    setErrors(result);
  };

  const onSubmit = () => {
    if (
      Object.keys(userInput).length !== 0 &&
      Object.keys(errors).length === 0
    ) {
      setModalContent(undefined);
      dispatch({
        type: ADD_PLAYER,
        payload: userInput,
      });

      setUserInput({});
    }
  };

  return (
    <>
      <h2>Add Player</h2>
      <div className="form">
        <div className="form_input_container" onInput={onUserInput}>
          <p className="error">{errors && errors.name}</p>
          <input
            ref={inputRef}
            type="text"
            name="name"
            className="form_input"
            placeholder="Name"
          />
          <p className="error">{errors && errors.age}</p>
          <input
            className="form_input"
            type="text"
            placeholder="Age"
            name="age"
          />
        </div>

        <button className="btn btn_primary" onClick={onSubmit}>
          Add Player
        </button>
      </div>
    </>
  );
};

export default CreatePlayerForm;
