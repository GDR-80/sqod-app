const TeamList = ({ onApprove, childrenOnTeam, currentUser }) => {
  return (
    <>
      <div>
        <h2 className="align_left">Team List</h2>
        <ul className="list">
          <>
            {!childrenOnTeam || childrenOnTeam.length === 0 ? (
              <li className="p_3">No Children on the team yet</li>
            ) : (
              childrenOnTeam.map((child) => {
                return (
                  <li className="list_item" key={child.id}>
                    <p>{child.name}</p>
                    {currentUser.userType === 0 && (
                      <button
                        onClick={() => {
                          onApprove(child.id, child.approved);
                        }}
                        className={
                          child.approved === 0
                            ? "btn btn_edit"
                            : "btn btn_success"
                        }
                      >
                        {child.approved === 0 ? "Approve" : "Approved"}
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
