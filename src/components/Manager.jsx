import { Link } from "react-router-dom";
import { useState } from "react";
import ManagerProfile from "./ManagerProfile";

const Manager = () => {
  const [isActiveTab, setActiveTab] = useState("Profile");
  const tabs = ["Profile", "Quick Links"];

  const onHandleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="tab_group">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={isActiveTab === tab ? "active tab" : "tab"}
              onClick={() => onHandleClick(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      {isActiveTab === "Profile" ? (
        <ManagerProfile />
      ) : (
        <div className="user_type_container">
          <div className="user_type manager">
            <h2>Create a Team</h2>
            <p>
              Create a Manager account and create a team, add players and
              parents, create fixtures and ask for availabilty for matches.
            </p>
            <Link to="/dashboard/manager/create-team">
              <button className="btn btn_primary">Create a Team</button>
            </Link>
          </div>
          <div className="user_type parent">
            <h2>View Fixtures</h2>
            <p>
              Create a Parent account and join a team, view upcoming fixtures
              and set availabilty for matches.
            </p>
            <Link to="/fixtures">
              <button className="btn btn_primary">Fixtures</button>
            </Link>
          </div>
          <div className="user_type parent">
            <h2>View Squad</h2>
            <p>
              Create a Parent account and join a team, view upcoming fixtures
              and set availabilty for matches.
            </p>
            <Link to="/players">
              <button className="btn btn_primary">Squad</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Manager;
