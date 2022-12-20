import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STORE } from "../../redux/types";
import axios from "axios";

const DeleteFixtureConfirm = ({ setModalContent }) => {
  const { fixtureId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();

  const onDelete = async () => {
    try {
      const results = await axios.delete(
        "http://localhost:6001/deleteFixture",
        {
          headers: { token, fixture_id: fixtureId },
        }
      );
      if (results.data.status === 1) {
        const newData = await axios.get("http://localhost:6001/syncStore", {
          headers: { token },
        });

        dispatch({
          type: UPDATE_STORE,
          payload: newData.data,
        });
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <button className="btn btn_delete ml" onClick={onDelete}>
          Confirm
        </button>
      </div>
    </>
  );
};

export default DeleteFixtureConfirm;
