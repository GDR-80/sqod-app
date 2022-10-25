import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BackgroundCard from "../UI/BackgroundCard";
import Container from "../UI/Container";
import FixtureInfo from "./FixtureInfo";
import DeleteFixtureButton from "../Buttons/DeleteFixture";

const FixtureDetail = () => {
  const { fixtureId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  const fixture = fixtures.find((item) => item.id === fixtureId);

  if (!fixture) {
    return <Navigate replace to={"/dashboard"} />;
  }
  const { homeTeam, awayTeam, date, meetTime, kickOff } = fixture;

  return (
    <Container>
      <BackgroundCard>
        {fixture && (
          <>
            <FixtureInfo
              key={fixture.id}
              homeTeam={homeTeam}
              awayTeam={awayTeam}
              date={date}
              meetTime={meetTime}
              kickOff={kickOff}
              id={fixture.id}
            />

            <button className="btn btn_primary ml">
              <Link to="/dashboard">Back</Link>
            </button>
            <DeleteFixtureButton />
          </>
        )}
      </BackgroundCard>
    </Container>
  );
};

export default FixtureDetail;
