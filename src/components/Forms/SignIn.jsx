import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SET_CURRENT_USER } from "../../redux/types";
import Loader from "../UI/Loader";
const SignIn = () => {
  const [signInName, setSignInName] = useState("");
  const [error, setError] = useState();
  const [signInPassword, setSignInPassword] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  if (!users) return <Loader />;
  let isUser = false;
  if (users.length > 0) {
    isUser = users.filter((user) => {
      if (user.name === signInName && signInPassword === user.password) {
        return true;
      }

      return false;
    });
  }

  const showError = () => {
    setError(true);
  };

  return (
    <div className="signin_container">
      <h3>Sign In</h3>
      <div className="signin_inner">
        <div className="signin_form">
          <input
            onInput={(e) => {
              setSignInName(e.target.value);
              setError();
            }}
            className="form_input"
            type="text"
          />
          <input
            onInput={(e) => {
              setSignInPassword(e.target.value);
              setError();
            }}
            className="form_input"
            type="password"
          />

          {isUser.length > 0 ? (
            <Link to="/dashboard">
              <button
                onClick={() => {
                  dispatch({ type: SET_CURRENT_USER, payload: isUser[0] });
                }}
                className="btn btn_primary"
              >
                Sign In
              </button>
            </Link>
          ) : (
            <>
              {error && (
                <p className="error error_message">
                  Username or password is incorrect
                </p>
              )}
              <button onClick={showError} className="btn btn_primary">
                Sign In
              </button>
            </>
          )}
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
