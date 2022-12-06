import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN, UPDATE_STORE } from "../redux/types";
import { Link, useNavigate } from "react-router-dom";
import BackgroundCard from "./UI/BackgroundCard";
import axios from "axios";

const UserType = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const manager = "manager";
  const parent = "parent";

  const onSubmit = async (user_type) => {
    console.log("hello world");
    const results = await axios.post("http://localhost:6001/createUser", {
      currentUser,
      user_type,
    });

    const { status } = results.data;

    console.log(results);
    if (status === 1) {
      onLogin();
    }
  };

  const onLogin = async () => {
    const result = await axios.post("http://localhost:6001/login", {
      email: currentUser.email,
      password: currentUser.password,
    });

    console.log(result, "<<<<<<<<<<<");
    dispatch({ type: "SET_TOKEN", payload: result.data.token });

    if (result.data.status === 1) {
      const newData = await axios.get("http://localhost:6001/syncStore", {
        headers: { token: result.data.token },
      });

      dispatch({
        type: UPDATE_STORE,
        payload: newData.data,
      });

      navigate("/dashboard");
    }
  };

  return (
    <BackgroundCard>
      <h1>Choose what type of Account you want</h1>
      <div className="border_card_container">
        <div className="border_card">
          <h2>{manager}</h2>
          <p>
            Create a Manager account and create a team, add players and parents,
            create fixtures and ask for availabilty for matches.
          </p>
          <Link to="/dashboard">
            <button
              className="btn btn_primary"
              onClick={() => {
                onSubmit(0);
                // dispatch({ type: SET_SCREEN, payload: 0 });
              }}
            >
              Manager
            </button>
          </Link>
        </div>
        <div className="border_card">
          <h2>{parent}</h2>
          <p>
            Create a Parent account and join a team, view upcoming fixtures and
            set availabilty for matches.
          </p>
          <Link to="/dashboard">
            <button
              className="btn btn_primary"
              onClick={() => {
                onSubmit(1);
                // dispatch({ type: SET_SCREEN, payload: 0 });
              }}
            >
              Parent
            </button>
          </Link>
        </div>
      </div>
    </BackgroundCard>
  );
};

export default UserType;
