import { useParams, Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteTeamButton from "../Buttons/DeleteTeamButton";
import Container from "../UI/Container";
import { SET_APPROVED } from "../../redux/types";
import TeamList from "./TeamList";
import BackgroundCard from "../UI/BackgroundCard";
import FixtureList from "../Fixtures/FixtureList";

const TeamDetail = () => {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const team = teams.find((team) => team.id === teamId);
  if (!team) {
    return <Navigate replace to={"/dashboard"} />;
  }
  const manager = users.find((user) => user.id === team.manager);
  const allChildren = [];
  users.forEach((user) => {
    if (user.children) {
      user.children.forEach((child) => {
        if (child.team === teamId) {
          allChildren.push(child);
        }
      });
    }
  });

  const childrenOnTeam = allChildren.filter((child) => child.team === team.id);

  const onApprove = (id, team) => {
    dispatch({ type: SET_APPROVED, payload: { id, team } });
  };

  return (
    <>
      <Container>
        <BackgroundCard>
          <TeamList
            team={team}
            onApprove={onApprove}
            manager={manager}
            childrenOnTeam={childrenOnTeam}
            currentUser={currentUser}
          />
          <FixtureList teamId={teamId} />
          <div className="">
            <Link to="/dashboard">
              <button className="btn btn_primary">Dashboard</button>
            </Link>

            {currentUser.userType === "manager" && (
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
