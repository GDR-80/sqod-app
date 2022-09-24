import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PlaceholderBadge from "../assets/soccer.png";

const Header = () => {
  const team = useSelector((state) => state.teams[0]);
  return (
    <header>
      <button className="btn btn_edit" onClick={() => localStorage.clear()}>
        Clear localStorage
      </button>
      <div className="container">
        <h1>SQOD App</h1>
        <h2>A Team Management App</h2>
        <div className="team_info">
          <Link to="/">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
