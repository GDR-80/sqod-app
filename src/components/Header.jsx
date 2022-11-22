import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.currentUser);
  const location = useLocation();
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
            <h4>Logged in as a {user.user_type}</h4>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
