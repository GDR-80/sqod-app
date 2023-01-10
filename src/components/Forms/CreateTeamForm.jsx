import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../validation";
import { UPDATE_STORE } from "../../redux/types";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../config";

const CreateTeamForm = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();
  const [redirect, setRedirect] = useState(false);
  const token = useSelector((state) => state.token);

  const currentUser = useSelector((state) => state.currentUser);
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onUserInput = (e) => {
    const _userInput = { ...userInput, [e.target.name]: e.target.value };
    setUserInput(_userInput);
    const result = validate(3, _userInput);
    setErrors(result);
  };

  const onSubmit = async () => {
    if (
      Object.keys(userInput).length !== 0 &&
      Object.keys(errors).length === 0
    ) {
      try {
        const result = await axios.post(
          `${url}createTeam`,
          {
            userInput,
            currentUser: currentUser.id,
          },
          { headers: { token } }
        );

        if (result.data.status === 1) {
          const newData = await axios.get(`${url}/syncStore`, {
            headers: { token },
          });

          dispatch({
            type: UPDATE_STORE,
            payload: newData.data,
          });
          setRedirect(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (redirect === true) {
    return <Navigate replace to={"/dashboard"} />;
  }

  return (
    <>
      <h2>Create a Team</h2>
      <div className="form create_user_form">
        <div className="form_input_container" onInput={onUserInput}>
          <label htmlFor="name">Team Name</label>
          <input
            ref={inputRef}
            type="text"
            name="name"
            className="form_input"
            placeholder="Name"
            id="name"
          />
          <p className="error">{errors && errors.name}</p>

          <label htmlFor="ageGroup">Age Group</label>
          <input
            className="form_input"
            type="text"
            placeholder="eg. U10"
            name="ageGroup"
            id="ageGroup"
          />
          <p className="error">{errors && errors.ageGroup}</p>
          <p>Home Ground Address</p>
          <label htmlFor="line1">Line One</label>
          <input
            type="text"
            name="line1"
            className="form_input"
            placeholder="Line One"
            id="line1"
          />
          <p className="error">{errors && errors.line1}</p>

          <label htmlFor="line2">Line Two</label>
          <input
            type="text"
            name="line2"
            className="form_input"
            placeholder="Line Two"
            id="line2"
          />
          <p className="error">{errors && errors.line2}</p>

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className="form_input"
            placeholder="City"
            id="city"
          />
          <p className="error">{errors && errors.city}</p>

          <label htmlFor="postCode">Postcode</label>
          <input
            type="text"
            name="postCode"
            className="form_input"
            placeholder="postCode"
            id="postCode"
          />
          <p className="error">{errors && errors.postCode}</p>
        </div>

        <button className="btn btn_primary" onClick={onSubmit}>
          Create Team
        </button>
      </div>
    </>
  );
};

export default CreateTeamForm;
