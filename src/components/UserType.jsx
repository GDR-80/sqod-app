import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN, SET_USER_TYPE } from "../redux/types";
import { Link } from "react-router-dom";

const UserType = () => {
  const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.currentUser);
  const manager = "manager";
  const parent = "parent";
  return (
    <>
      <h1>Choose what type of Account you want</h1>
      <div className="user_type_container">
        <div className="user_type manager">
          <h2>{manager}</h2>
          <p>
            Create a Manager account and create a team, add players and parents,
            create fixtures and ask for availabilty for matches.
          </p>
          <Link to="/dashboard">
            <button
              className="btn btn_primary"
              onClick={() => {
                dispatch({ type: SET_USER_TYPE, payload: manager });
                dispatch({ type: SET_SCREEN, payload: 0 });
              }}
            >
              Manager
            </button>
          </Link>
        </div>
        <div className="user_type parent">
          <h2>{parent}</h2>
          <p>
            Create a Parent account and join a team, view upcoming fixtures and
            set availabilty for matches.
          </p>
          <Link to="/dashboard">
            <button
              className="btn btn_primary"
              onClick={() => {
                dispatch({ type: SET_USER_TYPE, payload: parent });
              }}
            >
              Parent
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserType;
