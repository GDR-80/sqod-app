import PlaceholderBadge from "../../assets/soccer.png";
import { useSelector } from "react-redux";

const FixtureInfo = ({ homeTeam, awayTeam, date, meetTime, kickOff }) => {
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);
  homeTeam = teams.find((team) => team.id === homeTeam);
  awayTeam = teams.find((team) => team.id === awayTeam);
  const manager = users.find((user) => user.id === homeTeam.manager);
  const awayTeamManager = users.find((user) => user.id === awayTeam.manager);
  const { name, ageGroup, teamBadge } = homeTeam;
  const { line1, line2, city, postCode } = homeTeam.venue.address;

  return (
    <>
      <div className="fixture_container fixture_info">
        <div className="fixture">
          <div className="team_badge_holder">
            <div className="team_badge">
              {!teamBadge ? (
                <img src={PlaceholderBadge} alt="" />
              ) : (
                <img src={teamBadge} alt="" />
              )}
            </div>
            <p>
              {name} {ageGroup}
            </p>
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
            <p>
              {awayTeam.name} {awayTeam.ageGroup}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="homeTeam">
          <p className="pill">Meet at {meetTime}</p>
          <h4>Venue</h4>
          <ul className="home_venue">
            <li>{line1}</li>
            <li>{line2}</li>
            <li>{city}</li>
            <li>{postCode}</li>
          </ul>
          <div className="team_contact">
            <h4>Home Team Contact</h4>
            <p>
              <span className="profile_label">{manager.name}</span> -&nbsp;
              {manager.phone}
            </p>
          </div>
          <div className="team_contact">
            <h4>Away Team Contact</h4>
            <p>
              <span className="profile_label">{awayTeamManager.name}</span>
              -&nbsp;
              {awayTeamManager.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixtureInfo;
