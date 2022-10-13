import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../validation";
import { EDIT_TEAM } from "../../redux/types";
import { Link, useParams } from "react-router-dom";

const EditTeamForm = () => {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.teams);
  const team = teams.find((item) => item.id === teamId);
  const [teamName, setTeamName] = useState(team.name);
  const [teamAgeGroup, setTeamAgeGroup] = useState(team.ageGroup);
  const [teamAddresslineOne, setTeamAddresslineOne] = useState(
    team.venue.address.line1
  );
  const [teamAddresslineTwo, setTeamAddresslineTwo] = useState(
    team.venue.address.line2
  );
  const [teamAddressCity, setTeamAddressCity] = useState(
    team.venue.address.city
  );
  const [teamPostcode, setTeamPostcode] = useState(team.venue.address.postcode);

  const [errors, setErrors] = useState();
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { name, ageGroup } = team;

  const onSubmit = () => {
    // if (Object.keys(errors).length === 0) {
    dispatch({
      type: EDIT_TEAM,
      payload: {
        name: teamName,
        ageGroup: teamAgeGroup,
        venue: {
          address: {
            line1: teamAddresslineOne,
            line2: teamAddresslineTwo,
            city: teamAddressCity,
            postcode: teamPostcode,
          },
        },
        id: teamId,
      },
    });
    setTeamName("");
    setTeamAgeGroup("");
    setTeamAddresslineOne("");
    setTeamAddresslineTwo("");
    setTeamAddressCity("");
    setTeamPostcode("");
    // }
  };

  return (
    <>
      <h2>Edit Team</h2>
      <div className="form create_user_form">
        <div className="form_input_container">
          <label htmlFor="name">Team Name</label>
          <input
            onInput={(e) => setTeamName(e.target.value)}
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
            onInput={(e) => setTeamAgeGroup(e.target.value)}
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
            onInput={(e) => setTeamAddresslineOne(e.target.value)}
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
            onInput={(e) => setTeamAddresslineTwo(e.target.value)}
            type="text"
            name="line2"
            className="form_input"
            placeholder="Line Two"
            id="line2"
            defaultValue={team.venue.address.lineTwo}
          />
          <p className="error">{errors && errors.line2}</p>

          <label htmlFor="city">City</label>
          <input
            onInput={(e) => setTeamAddressCity(e.target.value)}
            type="text"
            name="city"
            className="form_input"
            placeholder="City"
            id="city"
            defaultValue={team.venue.address.city}
          />
          <p className="error">{errors && errors.city}</p>

          <label htmlFor="postcode">Postcode</label>
          <input
            onInput={(e) => setTeamPostcode(e.target.value)}
            type="text"
            name="postcode"
            className="form_input"
            placeholder="postcode"
            id="postcode"
            defaultValue={team.venue.address.postcode}
          />
          <p className="error">{errors && errors.postcode}</p>
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
