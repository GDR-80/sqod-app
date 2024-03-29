import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UPDATE_STORE, SET_TOKEN } from "../../redux/types";
import axios from "axios";
import { url } from "../../config";
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
    try {
      const result = await axios.post(`${url}/login`, {
        email,
        password,
      });

      dispatch({ type: SET_TOKEN, payload: result.data.token });

      if (result.data.status === 1) {
        const newData = await axios.get(`${url}/syncStore`, {
          headers: { token: result.data.token },
        });

        dispatch({
          type: UPDATE_STORE,
          payload: newData.data,
        });

        navigate("/dashboard");
      } else {
        showError();
      }
    } catch (error) {
      console.log(error);
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
