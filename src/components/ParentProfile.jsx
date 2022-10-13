import { useSelector } from "react-redux";

const ParentProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const team = useSelector((state) => state.teams);
  const { name, email, phone, userType, children } = currentUser;

  const myTeam = children.map((child) => {
    return team.find((item) => item.id === child.team); //Need to change when local storage is reset - don't cast to a number
  });

  return (
    <>
      <div className="main_profile">
        <div className="row">
          <div className="profile_container">
            <h2>{currentUser.name} Profile</h2>
            <ul className="list">
              <li>
                <p>
                  <span className="profile_label">Name:</span> {name}
                </p>
              </li>
              <li>
                <p>
                  <span className="profile_label">Email: </span>
                  {email}
                </p>
              </li>

              <li>
                <p>
                  <span className="profile_label">Phone Number: </span>
                  {phone}
                </p>
              </li>
              <li>
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
              {children.map((child, index) => {
                return (
                  <div className="list_group" key={child}>
                    <li>
                      <p>
                        <span className="profile_label">Child: </span>
                        {child.name}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="profile_label">Team: </span>
                        {myTeam[index].name}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="profile_label">Age Group: </span>
                        {myTeam[index].ageGroup}
                      </p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentProfile;
