import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Fixture from "./Fixture";
import FixtureTeamPage from "./FixtureTeamPage";
const FixtureList = ({ teamPage }) => {
  const { teamId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  return (
    <>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "3rem",
          padding: "2rem 0",
        }}
      >
        <h2>Fixtures</h2>
        <Link to={`/dashboard/manager/create-fixture/${teamId}`}>
          <button
            style={{ marginBottom: "2rem" }}
            className="btn btn_primary ml"
          >
            Create new Fixture
          </button>
        </Link>
      </div>
      <ul className="list">
        {!fixtures
          ? "Loading..."
          : fixtures.map((item) => (
              <>
                {teamPage === "teamPage" ? (
                  <FixtureTeamPage
                    key={item.id}
                    homeTeam={item.homeTeam}
                    awayTeam={item.awayTeam}
                    date={item.date}
                    teamBadge={item.teamBadge}
                    awayTeamBadge={item.awayTeamBadge}
                    id={item.id}
                  />
                ) : (
                  <Fixture
                    key={item.id}
                    homeTeam={item.homeTeam}
                    awayTeam={item.awayTeam}
                    date={item.date}
                    teamBadge={item.teamBadge}
                    awayTeamBadge={item.awayTeamBadge}
                    id={item.id}
                  />
                )}
              </>
            ))}
      </ul>
    </>
  );
};

export default FixtureList;
