const TeamList = ({
  team,
  onApprove,
  manager,
  childrenOnTeam,
  currentUser,
}) => {
  return (
    <>
      <div>
        {/* TODO CHANGE INLINE STYLE */}
        <h2 style={{ textAlign: "left" }}>Team List</h2>
        <ul className="list">
          <>
            {!childrenOnTeam || childrenOnTeam.length === 0 ? (
              <li className="p_3">No Children on the team yet</li>
            ) : (
              childrenOnTeam.map((child) => {
                return (
                  <li className="list_item" key={child.id}>
                    <p>{child.name}</p>
                    {currentUser.userType === "manager" && (
                      <button
                        // disabled={child.approved === true ? true : false}
                        onClick={() => {
                          onApprove(child.id, team.id);
                        }}
                        className={
                          child.approved === false
                            ? "btn btn_edit"
                            : "btn btn_success"
                        }
                      >
                        {child.approved === false ? "Approve" : "Approved"}
                      </button>
                    )}
                  </li>
                );
              })
            )}
          </>
        </ul>
      </div>
    </>
  );
};

export default TeamList;
