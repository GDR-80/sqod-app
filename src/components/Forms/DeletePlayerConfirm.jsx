import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_PLAYER } from "../../redux/types";

const DeletePlayerConfirm = ({ setModalContent }) => {
  const { playerId } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <h2>Delete Player</h2>
      <div className="delete_confirm">
        <button
          className="btn btn_primary"
          onClick={(e) => {
            setModalContent(undefined);
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn_delete ml"
          onClick={(e) => {
            setModalContent(undefined);
            dispatch({ type: DELETE_PLAYER, payload: playerId });
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default DeletePlayerConfirm;
