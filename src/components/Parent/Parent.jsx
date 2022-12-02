import { Link } from "react-router-dom";
import { useState } from "react";
import ParentProfile from "./ParentProfile";
import BackgroundCard from "../UI/BackgroundCard";

const Parent = () => {
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
        <ParentProfile />
      ) : (
        <BackgroundCard>
          {/* As more features get added to the app this is where we will link to different parts*/}
          <div className="border_card_container">
            <div className="border_card">
              <h2>Add a child or children</h2>
              <p>Add a child or children to a team</p>
              <Link to="/dashboard/parent/add-child">
                <button className="btn btn_primary">Add Children</button>
              </Link>
            </div>
            <div className="border_card">
              <h2>Profile</h2>
              <p>Manage your profile, view your teams</p>

              <button className="btn btn_primary" onClick={onHandleLinkBack}>
                Go to profile
              </button>
            </div>
          </div>
        </BackgroundCard>
      )}
    </>
  );
};

export default Parent;
