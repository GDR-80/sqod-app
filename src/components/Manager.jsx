import { Link } from "react-router-dom";
import { useState } from "react";
import ManagerProfile from "./ManagerProfile";
import BackgroundCard from "../components/UI/BackgroundCard";

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
        <BackgroundCard>
          {/* As more features get added to the app this is where we will link to different parts*/}
          <div
            // TODO remove inline styles
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              padding: "3rem 1rem",
            }}
          >
            <div className="user_type manager">
              <h2>Create a Team</h2>
              <p>Create a team, approve players and create fixtures.</p>
              <Link to="/dashboard/manager/create-team">
                <button className="btn btn_primary">Create a Team</button>
              </Link>
            </div>
          </div>
        </BackgroundCard>
      )}
    </>
  );
};

export default Manager;
