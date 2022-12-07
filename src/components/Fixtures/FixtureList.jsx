import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Fixture from "./Fixture";
const FixtureList = () => {
  let { teamId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  const currentUser = useSelector((state) => state.currentUser);
  teamId = Number(teamId);

  const fixturesToShow = fixtures.filter(
    (fixture) => fixture.homeTeamId === teamId || fixture.awayTeamId === teamId
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
        {currentUser.userType === 0 && (
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
                  managers={item.managers}
                  homeTeamId={item.homeTeamId}
                  awayTeamId={item.awayTeamId}
                  meetTime={item.meetTime}
                  kickOff={item.kickOffTime}
                  teamBadge={item.teamBadge}
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
