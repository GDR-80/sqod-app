import { useParams, Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EditButton from "../components/Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";

const PlayerDetail = () => {
  const { playerId } = useParams();
  const players = useSelector((state) => state.players);
  const player = players.find((item) => item.id === playerId);
  if (!player) {
    <p>no player</p>;
    return <Navigate replace to={"/players"} />;
  }

  return (
    <div className="container">
      <div className="list_container">
        <h3>Name: {player.name}</h3>
        <h3>Age: {player.age}</h3>
        <EditButton />
        <DeleteButton player={player.id} />
      </div>
      <button className="btn btn_primary ml">
        <Link to="/players">Back</Link>
      </button>
    </div>
  );
};

export default PlayerDetail;
