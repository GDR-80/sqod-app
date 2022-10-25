import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PlaceholderBadge from "../../assets/soccer.png";

const Fixture = ({ homeTeam, awayTeam, date, kickOff, id }) => {
  const teams = useSelector((state) => state.teams);
  homeTeam = teams.find((team) => team.id === homeTeam);
  awayTeam = teams.find((team) => team.id === awayTeam);

  return (
    <>
      <li className="border_bottom p_3">
        <div className="fixture_container">
          <div className="fixture">
            <div className="team_badge_holder">
              <div className="team_badge">
                {!homeTeam.teamBadge ? (
                  <img src={PlaceholderBadge} alt="" />
                ) : (
                  <img src={homeTeam.teamBadge} alt="" />
                )}
              </div>
              <p>{homeTeam.name}</p>
            </div>
            <div className="fixture_time">
              <p>
                {new Date(date * 1000)
                  .toLocaleString("default", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                  })
                  .replace(/,/g, "")}
              </p>
              <p className="kickOff_time">{kickOff}</p>
            </div>
            <div className="team_fixture">
              <div className="team_badge">
                {!awayTeam.teamBadge ? (
                  <img src={PlaceholderBadge} alt="" />
                ) : (
                  <img src={awayTeam.teamBadge} alt="" />
                )}
              </div>
              <p>{awayTeam.name}</p>
            </div>
          </div>
        </div>

        <Link to={`/fixture/${id}`}>
          <button className="btn btn_primary">View Fixture</button>
        </Link>
      </li>
    </>
  );
};

export default Fixture;
