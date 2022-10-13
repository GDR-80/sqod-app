import { useParams, Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteTeamButton from "./Buttons/DeleteTeamButton";

const TeamDetail = () => {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.teams);
  const team = teams.find((item) => item.id === teamId);

  const { name, ageGroup } = team;

  return (
    <>
      <div className="container">
        <h1>
          {name} {ageGroup}
        </h1>

        <div className="">
          <Link to="/dashboard">
            <button className="btn btn_primary">Dashboard</button>
          </Link>

          <Link to={`/dashboard/manager/edit-team/${teamId}`}>
            <button className="btn btn_edit ml">Edit Team</button>
          </Link>
          <DeleteTeamButton />
        </div>
      </div>
    </>
  );
};

export default TeamDetail;
