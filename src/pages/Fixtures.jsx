import React from "react";
import { Link } from "react-router-dom";

import FixtureList from "../components/FixtureList";

const Fixtures = () => {
  return (
    <>
      <FixtureList />
      <div className="container button">
        <button className="btn btn_primary ml">
          <Link to="/players">View Squad</Link>
        </button>
      </div>
    </>
  );
};

export default Fixtures;
