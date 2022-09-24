import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const nextMatch = useSelector((state) => state.fixtures[0]);
  console.log(nextMatch);
  const {
    teamBadge,
    awayTeam,
    awayTeamBadge,
    homeTeam,
    date,
    PlaceholderBadge,
    id,
  } = nextMatch;
  return (
    <>
      <div className="container button">
        <div className="list_container">
          <h2>Next Fixture</h2>

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
          <Link to={`/fixture/${id}`}>
            <button className="btn btn_primary">View Fixture</button>
          </Link>
        </div>
        <button className="btn btn_primary ml">
          <Link to="/players">View Squad</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
