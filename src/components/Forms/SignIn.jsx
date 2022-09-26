import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [signInName, setSignInName] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  console.log(signInName, signInPassword);
  return (
    <div className="signin_container">
      <h3>Sign In</h3>
      <div className="signin_inner">
        <div className="signin_form">
          <input
            onInput={(e) => {
              setSignInName(e.target.value);
            }}
            className="form_input"
            type="text"
          />
          <input
            onInput={(e) => {
              setSignInPassword(e.target.value);
            }}
            className="form_input"
            type="password"
          />
          <Link to="/home">
            <button className="btn btn_primary">Sign In</button>
          </Link>
        </div>
        <div className="singnup_link">
          <p>Don't have an account?</p>
          <p className="signup">SIGN UP</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
