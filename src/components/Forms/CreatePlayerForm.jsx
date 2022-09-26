import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_PLAYER } from "../../redux/types";

const CreatePlayerForm = ({ setModalContent }) => {
  const [addPlayerName, setAddPlayerName] = useState("");
  const [addPlayerAge, setAddPlayerAge] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Add Player</h2>
      <div className="form">
        <div className="form_input_container">
          <input
            onInput={(e) => {
              setAddPlayerName(e.target.value);
            }}
            ref={inputRef}
            type="text"
            name="name"
            className="form_input"
            placeholder="Name"
          />
          <input
            onInput={(e) => {
              setAddPlayerAge(e.target.value);
            }}
            className="form_input"
            type="text"
            placeholder="Age"
            name="age"
          />
        </div>

        <button
          className="btn btn_primary"
          onClick={(e) => {
            setModalContent(undefined);
            dispatch({
              type: ADD_PLAYER,
              payload: {
                addPlayerName,
                addPlayerAge,
              },
            });
            setAddPlayerName("");
            setAddPlayerAge("");
          }}
        >
          Add Player
        </button>
      </div>
    </>
  );
};

export default CreatePlayerForm;
