import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_CURRENT_USER, UPDATE_STORE } from "../../redux/types";
import axios from "axios";
import Loader from "../UI/Loader";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showError = () => {
    setError(true);
  };

  const onLogin = async () => {
    const result = await axios.post("http://localhost:6001/login", {
      email,
      password,
    });

    const {
      userData: currentUser,
      status,
      token,
      teams,
      fixtures,
    } = result.data;

    // const newData = await axios.get("http://localhost:6001/syncStore", {
    //   headers: { token },
    // });

    if (status === 1) {
      dispatch({
        type: SET_CURRENT_USER,
        payload: { currentUser, token, teams, fixtures },
      });
      // dispatch({
      //   type: UPDATE_STORE,
      //   payload: newData.data,
      // });

      navigate("/dashboard");
    } else {
      showError();
    }
  };

  return (
    <div className="signin_container">
      <h3>Sign In</h3>
      <div className="signin_inner">
        <div className="signin_form">
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            className="form_input"
            type="text"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            className="form_input"
            type="password"
          />
          {error && (
            <p className="error error_message">
              Username or password is incorrect
            </p>
          )}
          <button
            onClick={() => {
              onLogin();
            }}
            className="btn btn_primary"
          >
            Sign In
          </button>
        </div>
        <div className="singnup_link">
          <Link to="/signup">
            <p>Don't have an account?</p>
            <p className="signup">SIGN UP</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
