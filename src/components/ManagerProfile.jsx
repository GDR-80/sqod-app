import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const ManagerProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const allTeams = useSelector((state) => state.teams);
  const { teams, name, email, phone, userType } = currentUser;
  const myTeam = allTeams.filter((team) => {
    if (!teams.length) return;
    return teams.includes(team.id);
  });

  console.log(myTeam);
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
              {myTeam.map((item, index) => {
                return (
                  <li key={item.id}>
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
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="user_type_container">
    //     <div className="profile">
    //       <div className="profile_container">
    //         <h2>{currentUser.name} Profile</h2>
    //         <ul>
    //           <li>
    //             <span className="profile_label">Name:</span> {name}
    //           </li>
    //           <li>
    //             <span className="profile_label">Email: </span>
    //             {email}
    //           </li>
    //           <li>
    //             <span className="profile_label">Phone Number: </span>
    //             {phone}
    //           </li>
    //           <li>
    //             <span className="profile_label">User Account: </span>
    //             {userType}
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="my_teams">
    //         <h2>My Teams</h2>
    //         <ul>
    //           {children.map((child, index) => {
    //             return (
    //               <>
    //                 <li>
    //                   <span className="profile_label">Child: </span>
    //                   {child.name}
    //                 </li>
    //                 <li>
    //                   <span className="profile_label">Team: </span>
    //                   {myTeam[index].name}
    //                 </li>
    //                 <li>
    //                   <span className="profile_label">Age Group: </span>
    //                   {myTeam[index].ageGroup}
    //                 </li>
    //               </>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="controls_btn">
    //       <button className="btn btn_edit">Edit Profile</button>
    //       <button className="btn btn_delete ml">Delete Profile</button>
    //     </div>
    //   </div>
    // </>
  );
};

export default ManagerProfile;
