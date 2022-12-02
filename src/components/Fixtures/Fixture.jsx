import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PlaceholderBadge from "../../assets/soccer.png";

const Fixture = ({ homeTeamId, awayTeamId, kickOff, id }) => {
  const teams = useSelector((state) => state.teams);
  const homeTeam1 = teams.find((team) => team.id === homeTeamId);
  const awayTeam2 = teams.find((team) => team.id === awayTeamId);

  return (
    <>
      <li className="border_bottom p_3">
        <div className="fixture_container">
          <div className="fixture">
            <div className="team_badge_holder">
              <div className="team_badge">
                {!homeTeam1.teamBadge ? (
                  <img src={PlaceholderBadge} alt="" />
                ) : (
                  <img src={homeTeam1.teamBadge} alt="" />
                )}
              </div>
              <p>{homeTeam1.name}</p>
            </div>
            <div className="fixture_time">
              <p>
                {new Date(kickOff * 1000)
                  .toLocaleString("default", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                  })
                  .replace(/,/g, "")}
              </p>
              <p className="kickOff_time">
                {new Date(kickOff * 1000).toLocaleTimeString("default", {
                  timeStyle: "short",
                })}
              </p>
            </div>
            <div className="team_fixture">
              <div className="team_badge">
                {!awayTeam2.teamBadge ? (
                  <img src={PlaceholderBadge} alt="" />
                ) : (
                  <img src={awayTeam2.teamBadge} alt="" />
                )}
              </div>
              <p>{awayTeam2.name}</p>
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
