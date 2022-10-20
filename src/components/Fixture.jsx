import { Link, useLocation } from "react-router-dom";
import PlaceholderBadge from "../assets/soccer.png";

const Fixture = ({
  homeTeam,
  awayTeam,
  date,
  teamBadge,
  awayTeamBadge,
  id,
}) => {
  let location = useLocation();
  return (
    <>
      <div className="list_container">
        <p>
          {new Date(date * 1000)
            .toLocaleString("default", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            })
            .replace(/,/g, "")}
        </p>
        <div className="fixture">
          <div className="team">
            <div className="team_badge">
              {!teamBadge ? (
                <img src={PlaceholderBadge} alt="" />
              ) : (
                <img src={teamBadge} alt="" />
              )}
            </div>
            <p>{homeTeam}</p>
          </div>
          <div className="fixture_time">
            <p className="time">
              {new Date(date * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="team_fixture">
            <div className="team_badge">
              {!awayTeamBadge ? (
                <img src={PlaceholderBadge} alt="" />
              ) : (
                <img src={awayTeamBadge} alt="" />
              )}
            </div>
            <p>{awayTeam}</p>
          </div>
        </div>
        <div>
          {location.pathname !== `/fixture/${id}` && (
            <Link to={`/fixture/${id}`}>
              <button className="btn btn_primary">View Fixture</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Fixture;
