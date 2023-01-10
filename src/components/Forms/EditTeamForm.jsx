import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../validation";
import { UPDATE_STORE } from "../../redux/types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../config";

const EditTeamForm = () => {
  let { teamId } = useParams();
  const teams = useSelector((state) => state.teams);
  const team = teams.find((item) => item.id === Number(teamId));
  const currentUser = useSelector((state) => state.currentUser);
  const token = useSelector((state) => state.token);

  teamId = Number(teamId);

  const { city, postCode, line1, line2 } = team.venue.address;

  const [userInput, setUserInput] = useState({
    city,
    postCode,
    line1,
    line2,
    name: team.name,
    ageGroup: team.ageGroup,
  });
  const [errors, setErrors] = useState();
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { name, ageGroup } = team;

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
        const result = await axios.put(
          `${url}/editTeam`,
          {
            userInput,
            currentUser: currentUser.id,
            teamId,
            addressId: team.addressId,
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
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h2>Edit Team</h2>
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
            defaultValue={name}
          />
          <p className="error">{errors && errors.name}</p>

          <label htmlFor="ageGroup">Age Group</label>
          <input
            className="form_input"
            type="text"
            placeholder="eg. U10"
            name="ageGroup"
            id="ageGroup"
            defaultValue={ageGroup}
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
            defaultValue={team.venue.address.line1}
          />
          <p className="error">{errors && errors.line1}</p>

          <label htmlFor="line2">Line Two</label>
          <input
            type="text"
            name="line2"
            className="form_input"
            placeholder="Line Two"
            id="line2"
            defaultValue={team.venue.address.line2}
          />
          <p className="error">{errors && errors.line2}</p>

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className="form_input"
            placeholder="City"
            id="city"
            defaultValue={team.venue.address.city}
          />
          <p className="error">{errors && errors.city}</p>

          <label htmlFor="postCode">Postcode</label>
          <input
            type="text"
            name="postCode"
            className="form_input"
            placeholder="postCode"
            id="postCode"
            defaultValue={team.venue.address.postCode}
          />
          <p className="error">{errors && errors.postCode}</p>
        </div>
        <Link to={`/team/${teamId}`}>
          <button className="btn btn_primary" onClick={onSubmit}>
            Submit
          </button>
        </Link>
      </div>
    </>
  );
};

export default EditTeamForm;
