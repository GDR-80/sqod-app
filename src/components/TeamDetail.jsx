import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteTeamButton from "./Buttons/DeleteTeamButton";
import Container from "./UI/Container";
import { SET_APPROVED } from "../redux/types";
import TeamList from "./TeamList";
import BackgroundCard from "./UI/BackgroundCard";
import Fixture from "./Fixture";
import FixtureList from "./FixtureList";

const TeamDetail = () => {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser);

  const teamPage = "teamPage";

  const dispatch = useDispatch();

  const team = teams.find((team) => team.id === teamId);
  const manager = users.find((user) => user.id === team.manager);
  const allChildren = [];
  users.forEach((user) => {
    if (user.children) {
      user.children.forEach((child) => {
        if (child.team === teamId) {
          allChildren.push(child);
        }
        // if (currentUser.teams.includes(child.team)) {
        //   allChildren.push(child);
        // }
      });
    }
  });

  // && child.approved === false - try this on the below

  const childrenOnTeam = allChildren.filter((child) => child.team === team.id);

  // const notApproved = allChildren.filter(
  //   (child) => child.team === team.id && child.approved === false
  // )

  const onApprove = (id, team) => {
    dispatch({ type: SET_APPROVED, payload: { id, team } });
  };

  return (
    <>
      <Container>
        <BackgroundCard>
          <TeamList
            team={team}
            onApprove={onApprove}
            manager={manager}
            childrenOnTeam={childrenOnTeam}
            currentUser={currentUser}
          />
          <FixtureList teamPage={teamPage} />
          <div className="">
            <Link to="/dashboard">
              <button className="btn btn_primary">Dashboard</button>
            </Link>

            {currentUser.userType === "manager" && (
              <>
                <Link to={`/dashboard/manager/edit-team/${teamId}`}>
                  <button className="btn btn_edit ml">Edit Team</button>
                </Link>
                <DeleteTeamButton />
              </>
            )}
          </div>
        </BackgroundCard>
      </Container>
    </>
  );
};

export default TeamDetail;

// const TeamDetail = () => {
//   const { teamId } = useParams();
//   const teams = useSelector((state) => state.teams);
//   const users = useSelector((state) => state.users);
//   const currentUser = useSelector((state) => state.currentUser);

//   const dispatch = useDispatch();

//   const team = teams.find((team) => team.id === teamId);
//   const manager = users.find((user) => user.id === team.manager);
//   const allChildren = [];
//   users.forEach((user) => {
//     if (user.children) {
//       user.children.forEach((child) => {
//         if (child.team === teamId) {
//           allChildren.push(child);
//         }
//         // if (currentUser.teams.includes(child.team)) {
//         //   allChildren.push(child);
//         // }
//       });
//     }
//   });

//   // && child.approved === false - try this on the below

//   const childrenOnTeam = allChildren.filter((child) => child.team === team.id);

//   // const notApproved = allChildren.filter(
//   //   (child) => child.team === team.id && child.approved === false
//   // );
//   const { name, ageGroup } = team;

//   const onApprove = (id, team) => {
//     dispatch({ type: SET_APPROVED, payload: { id, team } });
//   };

//   return (
//     <>
//       <Container>
//         {/* <div className="container"> */}
//         <div className="background_card">
//           <div className="">
//             {!team || !manager ? (
//               <h2>There are no teams set up yet</h2>
//             ) : (
//               <>
//                 <h1>
//                   {name} {ageGroup}
//                 </h1>
//                 <h2>{manager.name}</h2>
//               </>
//             )}
//           </div>
//           <div>
//             <ul className="list">
//               <>
//                 {!childrenOnTeam || childrenOnTeam.length === 0 ? (
//                   <li>No Children on the team yet</li>
//                 ) : (
//                   childrenOnTeam.map((child) => {
//                     return (
//                       <>
//                         <li key={child.id}>
//                           <p>{child.name}</p>
//                           {currentUser.userType === "manager" && (
//                             <button
//                               // disabled={child.approved === true ? true : false}
//                               onClick={() => {
//                                 onApprove(child.id, team.id);
//                               }}
//                               className={
//                                 child.approved === false
//                                   ? "btn btn_edit"
//                                   : "btn btn_success"
//                               }
//                             >
//                               {child.approved === false
//                                 ? "Approve"
//                                 : "Approved"}
//                             </button>
//                           )}
//                         </li>
//                       </>
//                     );
//                   })
//                 )}
//               </>
//             </ul>
//           </div>

//           <div className="">
//             <Link to="/dashboard">
//               <button className="btn btn_primary">Dashboard</button>
//             </Link>

//             {currentUser.userType === "manager" && (
//               <>
//                 <Link to={`/dashboard/manager/edit-team/${teamId}`}>
//                   <button className="btn btn_edit ml">Edit Team</button>
//                 </Link>
//                 <DeleteTeamButton />
//               </>
//             )}
//           </div>
//         </div>
//       </Container>
//       {/* </div> */}
//     </>
//   );
// };

// export default TeamDetail;
