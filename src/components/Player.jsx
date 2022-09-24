import { Link } from "react-router-dom";

const Player = ({ name, id }) => {
  return (
    <div className="container">
      <div className="list_container">
        <h2>{name}</h2>
        <Link to={`/player/${id}`}>
          <button className="btn btn_primary">View Player</button>
        </Link>
      </div>
    </div>
  );
};

export default Player;
