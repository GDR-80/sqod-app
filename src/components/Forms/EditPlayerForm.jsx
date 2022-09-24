import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EDIT_PLAYER } from "../../redux/types";
const EditPlayerForm = ({ setModalContent }) => {
  const { playerId } = useParams();
  const players = useSelector((state) => state.players);
  const player = players.find((item) => item.id === playerId);
  const [editPlayerName, setEditPlayerName] = useState(player.name);
  const [editPlayerAge, setEditPlayerAge] = useState(player.age);
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Edit Player</h2>
      <div className="form">
        <div className="form_input_container">
          <input
            onInput={(e) => setEditPlayerName(e.target.value)}
            ref={inputRef}
            type="text"
            name="name"
            className="form_input"
            placeholder="Name"
            value={editPlayerName}
          />
          <input
            onInput={(e) => setEditPlayerAge(e.target.value)}
            type="text"
            name="age"
            className="form_input"
            placeholder="Age"
            value={editPlayerAge}
          />
        </div>

        <button
          className="btn btn_edit"
          onClick={(e) => {
            setModalContent(undefined);
            dispatch({
              type: EDIT_PLAYER,
              payload: {
                name: editPlayerName,
                age: editPlayerAge,
                id: playerId,
              },
            });
            setEditPlayerName("");
            setEditPlayerAge("");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default EditPlayerForm;
