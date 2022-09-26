import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Player from "../components/Player";
import Search from "../components/Search";
import CreateButton from "../components/Buttons/CreateButton";

const Players = () => {
  const players = useSelector((state) => state.players);

  const filteredData = useSelector((state) => state.filteredData);

  const results = filteredData && filteredData.length ? filteredData : players;

  return (
    <>
      <div className="container">
        <Search />
        {!results
          ? "Loading..."
          : results.map((item) => (
              <Player
                key={item.id}
                name={item.name}
                age={item.age}
                id={item.id}
              />
            ))}
        <div>
          <CreateButton />
          <button className="btn btn_primary ml">
            <Link to="/home">Back</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Players;
