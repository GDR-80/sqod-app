import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Fixture from "./Fixture";
const FixtureList = () => {
  const { teamId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  const currentUser = useSelector((state) => state.currentUser);
  const manager = "manager";

  const fixturesToShow = fixtures.filter(
    (fixture) => fixture.homeTeam === teamId || fixture.awayTeam === teamId
  );

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
        {currentUser.userType === manager && (
          <Link to={`/dashboard/manager/create-fixture/${teamId}`}>
            <button
              style={{ marginBottom: "2rem" }}
              className="btn btn_primary ml"
            >
              Create new Fixture
            </button>
          </Link>
        )}
      </div>
      {fixturesToShow.length > 0 ? (
        <ul className="list">
          {fixturesToShow.length === 0
            ? "Loading..."
            : fixturesToShow.map((item) => (
                <Fixture
                  key={item.id}
                  homeTeam={item.homeTeam}
                  awayTeam={item.awayTeam}
                  date={item.date}
                  meetTime={item.meetTime}
                  kickOff={item.kickOff}
                  teamBadge={item.teamBadge}
                  awayTeamBadge={item.awayTeamBadge}
                  id={item.id}
                />
              ))}
        </ul>
      ) : (
        <h2 className="p_3">No Fixtures to show</h2>
      )}
    </>
  );
};

export default FixtureList;
