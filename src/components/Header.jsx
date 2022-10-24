import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PlaceholderBadge from "../assets/soccer.png";

const Header = () => {
  const team = useSelector((state) => state.teams[0]);
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
            {user && (
              <div className="team_info">
                {/* <Link to="/home">
                  <div className="team_badge">
                    {!team.teamBadge ? (
                      <img src={PlaceholderBadge} alt="" />
                    ) : (
                      <img src={team.teamBadge} alt="" />
                    )}
                  </div>
                </Link>
                <div>
                  <p className="team_name">{team.name}</p>
                  <p className="team_ageGroup">
                    <span>{team.ageGroup}</span>
                  </p>
                    </div> */}
              </div>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
