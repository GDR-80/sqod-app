import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOG_OUT } from "../redux/types";
import axios from "axios";

const Header = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOut = async () => {
    try {
      const results = await axios.delete("http://localhost:6001/logOut", {
        headers: { token },
      });

      if (results.data.status === 1) {
        navigate("/");
        dispatch({ type: LOG_OUT });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/signup" && (
        <header>
          <button className="btn btn_edit" onClick={() => localStorage.clear()}>
            Clear localStorage
          </button>
          <div className="container">
            <h1>
              Welcome to <span className="welcome_msg">SQOD,</span> {user.name}
            </h1>
            <h4>Logged in as a {user.userType === 0 ? "Manager" : "Parent"}</h4>
            <button className="btn btn_primary-accent" onClick={onLogOut}>
              Log Out
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
