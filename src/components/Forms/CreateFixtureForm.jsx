import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { validate } from "../../validation";
import { CREATE_FIXTURE } from "../../redux/types";

const CreateFixtureForm = () => {
  const teams = useSelector((state) => state.teams);
  const { teamId } = useParams();
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();
  const [redirect, setRedirect] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const currentTeam = teams.find((team) => team.id === teamId);

  let oppositionList = [];
  teams.forEach((team) => {
    if (team.ageGroup === currentTeam.ageGroup && team.id !== currentTeam.id)
      oppositionList.push(team);
  });

  const onUserInput = (e) => {
    const _userInput = { ...userInput, [e.target.name]: e.target.value };
    setUserInput(_userInput);
    const result = validate(4, _userInput);
    setErrors(result);
  };

  const onSubmit = () => {
    if (
      Object.keys(userInput).length !== 0 &&
      Object.keys(errors).length === 0
    ) {
      dispatch({
        type: CREATE_FIXTURE,
        payload: { fixture: userInput, teamId },
      });

      setRedirect(true);
    }
  };
  if (redirect === true) {
    return <Navigate replace to={`/team/${teamId}`} />;
  }

  return (
    <>
      <h2>Create A Fixture</h2>
      <div className="form create_user_form">
        <div className="form_input_container" onInput={onUserInput}>
          <label htmlFor="date">Choose a Date</label>
          <input
            ref={inputRef}
            type="date"
            name="date"
            className="form_input"
            id="date"
          />
          <p className="error">{errors && errors.date}</p>

          <label htmlFor="meetTime">Meet Time</label>
          <input
            className="form_input"
            type="time"
            name="meetTime"
            id="time"
            min="09:00"
            max="14:00"
            required
          />
          <p className="error">{errors && errors.meetTime}</p>

          <label htmlFor="kickOff">Kick Off Time</label>
          <input
            type="time"
            name="kickOff"
            className="form_input"
            id="kickOff"
            min="10:00"
            max="15:00"
          />
          <p className="error">{errors && errors.kickOff}</p>

          <div className="form_group">
            <label htmlFor="opposition">Select a team to play</label>
            <select
              defaultValue=""
              onChange={() => {}}
              name="opposition"
              id="opposition"
            >
              <option disabled value="">
                SELECT A TEAM
              </option>
              {oppositionList.map((team, index) => {
                return (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                );
              })}
            </select>
            <p className="error">{errors && errors.opposition}</p>
          </div>

          <div className="radio_container">
            <p>
              <label htmlFor="home">Home</label>
              <input type="radio" value="home" name="venue" id="home" />
            </p>
            <p>
              <label htmlFor="away">Away</label>
              <input type="radio" value="away" name="venue" id="away" />
            </p>
          </div>
          <p className="error">{errors && errors.venue}</p>
        </div>

        <button className="btn btn_primary" onClick={onSubmit}>
          Create Fixture
        </button>
      </div>
    </>
  );
};

export default CreateFixtureForm;
