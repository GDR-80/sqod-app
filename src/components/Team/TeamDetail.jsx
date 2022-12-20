import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteTeamButton from "../Buttons/DeleteTeamButton";
import Container from "../UI/Container";
import Loader from "../UI/Loader";
import { UPDATE_STORE } from "../../redux/types";
import TeamList from "./TeamList";
import BackgroundCard from "../UI/BackgroundCard";
import FixtureList from "../Fixtures/FixtureList";
import axios from "axios";

const TeamDetail = () => {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.teams);

  const currentUser = useSelector((state) => state.currentUser);
  const token = useSelector((state) => state.token);

  const { children } = currentUser;

  const dispatch = useDispatch();

  const team = teams && teams.find((team) => team.id === Number(teamId));
  // if (!team) {
  //   return <Navigate replace to={"/dashboard"} />; // This causing bug on logout
  // }

  const childrenOnTeam =
    children && children.filter((child) => child.teamId === Number(teamId));

  if (!childrenOnTeam) {
    return <Loader />;
  }

  const onApprove = async (id, isApproved) => {
    isApproved === 0 ? (isApproved = 1) : (isApproved = 0);

    try {
      const results = await axios.post(
        "http://localhost:6001/setApproved",
        {
          id,
          isApproved,
        },
        { headers: { token } }
      );

      if (results.data.status === 1) {
        const newData = await axios.get("http://localhost:6001/syncStore", {
          headers: { token },
        });

        dispatch({
          type: UPDATE_STORE,
          payload: newData.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <BackgroundCard>
          <TeamList
            team={team}
            onApprove={onApprove}
            childrenOnTeam={childrenOnTeam}
            currentUser={currentUser}
          />
          <FixtureList teamId={teamId} />
          <div>
            <Link to="/dashboard">
              <button className="btn btn_primary">Dashboard</button>
            </Link>

            {currentUser.userType === 0 && (
              <>
                <Link to={`/dashboard/manager/edit-team/${teamId}`}>
                  <button className="btn btn_edit ml">Edit Team</button>
                </Link>
                <DeleteTeamButton />
              </>
            )}
          </div>
        </BackgroundCard>
      </Container>
    </>
  );
};

export default TeamDetail;
