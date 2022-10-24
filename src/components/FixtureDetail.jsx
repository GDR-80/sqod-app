import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Fixture from "../components/Fixture";
import FixtureTeamPage from "./FixtureTeamPage";
import BackgroundCard from "./UI/BackgroundCard";
import Container from "./UI/Container";
import FixtureInfo from "./FixtureInfo";

const FixtureDetail = () => {
  const { fixtureId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  // const teams = useSelector((state) => state.teams);
  const fixture = fixtures.find((item) => item.id === fixtureId);
  // const team = teams.find((team) => team.id === fixture.homeTeam);
  const {
    id,
    homeTeam,
    awayTeam,
    date,
    meetTime,
    kickOff,
    teamBadge,
    awayTeamBadge,
  } = fixture;

  return (
    <Container>
      <BackgroundCard>
        <FixtureInfo
          key={id}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          date={date}
          meetTime={meetTime}
          kickOff={kickOff}
          teamBadge={teamBadge}
          awayTeamBadge={awayTeamBadge}
          id={id}
        />

        <button className="btn btn_primary ml">
          <Link to="/dashboard">Back</Link>
        </button>
      </BackgroundCard>
    </Container>
  );
};

export default FixtureDetail;
