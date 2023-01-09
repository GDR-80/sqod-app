import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackgroundCard from "../UI/BackgroundCard";
import Container from "../UI/Container";
import FixtureInfo from "./FixtureInfo";
import DeleteFixtureButton from "../Buttons/DeleteFixture";

const FixtureDetail = () => {
  const { fixtureId } = useParams();
  const fixtures = useSelector((state) => state.fixtures);
  const currentUser = useSelector((state) => state.currentUser);
  const fixture =
    fixtures && fixtures.find((item) => item.id === Number(fixtureId));
  const navigate = useNavigate();

  const { managers, homeTeamId, awayTeamId, meetTime, kickOffTime } =
    fixture ?? {};

  return (
    <Container>
      <BackgroundCard>
        {fixture && (
          <>
            <FixtureInfo
              key={fixture.id}
              homeTeamId={homeTeamId}
              awayTeamId={awayTeamId}
              meetTime={meetTime}
              managers={managers}
              kickOff={kickOffTime}
              id={fixture.id}
            />

            <button className="btn btn_primary ml" onClick={() => navigate(-1)}>
              Back
            </button>
            {currentUser.userType === 0 && <DeleteFixtureButton />}
          </>
        )}
      </BackgroundCard>
    </Container>
  );
};

export default FixtureDetail;
