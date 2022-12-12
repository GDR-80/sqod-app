import EditTeamForm from "../Forms/EditTeamForm";
import { useSelector } from "react-redux";

const EditTeam = () => {
  const teams = useSelector((state) => state.teams);
  return <div className="container">{teams && <EditTeamForm />}</div>;
};

export default EditTeam;
