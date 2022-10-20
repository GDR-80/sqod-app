import { useSelector } from "react-redux";
import BackgroundCard from "./UI/BackgroundCard";
import { Link } from "react-router-dom";

const ManagerProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const allTeams = useSelector((state) => state.teams);
  const fixtures = useSelector((state) => state.fixtures);
  const { teams, name, email, phone, userType } = currentUser;
  const myTeams = allTeams.filter((team) => {
    if (!teams.length) return;
    return teams.includes(team.id);
  });

  return (
    <>
      <BackgroundCard>
        <div className="row">
          <div className="profile_container">
            <h2>{currentUser.name} Profile</h2>

            <ul className="list">
              <li className="list_item">
                <p>
                  <span className="profile_label">Name:</span> {name}
                </p>
              </li>

              <li className="list_item">
                <p>
                  <span className="profile_label">Email: </span>
                  {email}
                </p>
              </li>

              <li className="list_item">
                <p>
                  <span className="profile_label">Phone Number: </span>
                  {phone}
                </p>
              </li>
              <li className="list_item">
                <p>
                  <span className="profile_label">User Account: </span>
                  {userType}
                </p>
              </li>
            </ul>
            <div className="controls_btn">
              <button className="btn btn_edit">Edit Profile</button>
              <button className="btn btn_delete ml">Delete Profile</button>
            </div>
          </div>
          <div className="my_teams">
            <h2>My Teams</h2>
            {myTeams.length === 0 ? (
              <>
                <h3>No teams to show</h3>
                <Link to="/dashboard/manager/create-team">
                  <button className="btn btn_primary">Create a Team</button>
                </Link>
              </>
            ) : (
              <ul className="list">
                {myTeams.map((item, index) => {
                  return (
                    <li className="list_item" key={item.id}>
                      <p>
                        {item.name} {item.ageGroup}
                      </p>
                      <Link to={`/team/${item.id}`}>
                        <button className="btn btn_primary">View Team</button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </BackgroundCard>
    </>
  );
};

export default ManagerProfile;
