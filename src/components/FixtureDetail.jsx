import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Fixture from "../components/Fixture";

const FixtureDetail = () => {
  const { fixtureId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  const fixture = fixtures.find((item) => item.id === Number(fixtureId));

  return (
    <>
      <div className="container">
        <Fixture
          key={fixture.id}
          homeTeam={fixture.homeTeam}
          awayTeam={fixture.awayTeam}
          date={fixture.date}
          teamBadge={fixture.teamBadge}
          awayTeamBadge={fixture.awayTeamBadge}
          id={fixture.id}
        />

        <button className="btn btn_primary ml">
          <Link to="/home">Back</Link>
        </button>
      </div>
    </>
  );
};

export default FixtureDetail;
