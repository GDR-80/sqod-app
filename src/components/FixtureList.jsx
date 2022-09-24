import React from "react";
import { useSelector } from "react-redux";
import Fixture from "./Fixture";

const FixtureList = () => {
  const fixtures = useSelector((state) => state.fixtures);
  return (
    <>
      <div className="container">
        {!fixtures
          ? "Loading..."
          : fixtures.map((item) => (
              <Fixture
                key={item.id}
                homeTeam={item.homeTeam}
                awayTeam={item.awayTeam}
                date={item.date}
                teamBadge={item.teamBadge}
                awayTeamBadge={item.awayTeamBadge}
                id={item.id}
              />
            ))}
      </div>
    </>
  );
};

export default FixtureList;
