import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STORE } from "../../redux/types";
import axios from "axios";

const DeleteTeamConfirm = ({ setModalContent }) => {
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const token = useSelector((state) => state.token);

  if (redirect) {
    return <Navigate replace to={"/dashboard"} />;
  }

  const onDelete = async () => {
    try {
      const results = await axios.delete("http://localhost:6001/deleteTeam", {
        data: { teamId },
        headers: { token },
      });
      if (results.data.status === 1) {
        const newData = await axios.get("http://localhost:6001/syncStore", {
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
  };
  return (
    <>
      <h2>Delete Team</h2>
      <p className="danger_message">
        If you click confirm this will permantley delete this team and all the
        associated data.
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
        <button className="btn btn_delete ml" onClick={onDelete}>
          Confirm
        </button>
      </div>
    </>
  );
};

export default DeleteTeamConfirm;
