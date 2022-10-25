import { Link } from "react-router-dom";
import { useState } from "react";
import ManagerProfile from "../Manager/ManagerProfile";
import BackgroundCard from "../UI/BackgroundCard";

const Manager = () => {
  const [isActiveTab, setActiveTab] = useState("Profile");
  const tabs = ["Profile", "Quick Links"];

  const onHandleClick = (tab) => {
    setActiveTab(tab);
  };

  const onHandleLinkBack = (tab) => {
    setActiveTab(tab);
    setActiveTab("Profile");
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
          <div className="border_card_container">
            <div className="border_card">
              <h2>Create a Team</h2>
              <p>Create a teams that you can Manage.</p>
              <Link to="/dashboard/manager/create-team">
                <button className="btn btn_primary">Create a Team</button>
              </Link>
            </div>
            <div className="border_card">
              <h2>Profile</h2>
              <p>Manage your profile, view your teams</p>

              <button className="btn btn_primary" onClick={onHandleLinkBack}>
                Create a Team
              </button>
            </div>
          </div>
        </BackgroundCard>
      )}
    </>
  );
};

export default Manager;
