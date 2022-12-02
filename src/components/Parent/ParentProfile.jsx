import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ParentProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const teams = useSelector((state) => state.teams);
  const { name, email, phone, children } = currentUser;
  const userType = "Parent";

  let myTeams = [];
  if (children) {
    myTeams = children.map((child) => {
      return teams.find((team) => team.id === child.team_id);
    });
  }

  return (
    <>
      <div className="background_card">
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
            <ul className="list">
              {!children || children.length === 0 ? (
                <>
                  <h4>No Children have been added</h4>
                  <Link to="/dashboard/parent/add-child">
                    <button className="btn btn_primary">Add Children</button>
                  </Link>
                </>
              ) : (
                children.map((child, index) => {
                  return (
                    <div className="list_group" key={child + index}>
                      <li className="list_item">
                        <p>
                          <span className="profile_label">Child: </span>
                          {child.name}
                        </p>
                        {child.approved === 0 ? (
                          <button className="btn btn_info">
                            Waiting to be approved
                          </button>
                        ) : (
                          <button className="btn btn_success">Approved</button>
                        )}
                      </li>
                      <li className="list_item">
                        <p>
                          <span className="profile_label">Team: </span>
                          {myTeams[index].name}
                        </p>

                        <Link to={`/team/${child.team_id}`}>
                          <button className="btn btn_primary">View Team</button>
                        </Link>
                      </li>
                      <li className="list_item">
                        <p>
                          <span className="profile_label">Age Group: </span>
                          {myTeams[index].ageGroup}
                        </p>
                      </li>
                    </div>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentProfile;
