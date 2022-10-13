import { Link } from "react-router-dom";
import { useState } from "react";
import ParentProfile from "./ParentProfile";

const Parent = () => {
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
        <ParentProfile />
      ) : (
        <div className="user_type_container">
          <div className="user_type manager">
            <h2>Add Child or children</h2>
            <p>Add children and search for a team. </p>
            <Link to="/dashboard/parent/add-child">
              <button className="btn btn_primary">Add Children</button>
            </Link>
          </div>
          <div className="user_type parent">
            <h2>View Fixtures</h2>
            <p>View Fixture details</p>
            <Link to="/fixtures">
              <button className="btn btn_primary">Fixtures</button>
            </Link>
          </div>
          <div className="user_type parent">
            <h2>View Squad</h2>
            <p>View squad</p>
            <Link to="/players">
              <button className="btn btn_primary">Squad</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Parent;
