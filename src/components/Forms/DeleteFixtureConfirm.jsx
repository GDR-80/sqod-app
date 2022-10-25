import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_FIXTURE } from "../../redux/types";

const DeleteFixtureConfirm = ({ setModalContent }) => {
  const { fixtureId } = useParams();
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate replace to={"/dashboard"} />;
  }

  return (
    <>
      <h2>Delete Fixture</h2>
      <p className="danger_message">
        If you click confirm this will permantley delete this Fixture and all
        the associated data.
      </p>
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
            // setModalContent(undefined);
            dispatch({ type: DELETE_FIXTURE, payload: fixtureId });
            setRedirect(true);
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default DeleteFixtureConfirm;
