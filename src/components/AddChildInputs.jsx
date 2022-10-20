import { useEffect, useRef } from "react";

const AddChildInputs = ({ index, errors, teams, userInput }) => {
  let teamAgesList = [];
  teams.forEach((team) => {
    teamAgesList.push(team.ageGroup);
  });

  // de-duplicate the array
  teamAgesList = [...new Set(teamAgesList)];

  let filteredTeams = [];
  if (userInput.length > 0 && userInput[index] && userInput[index].ageGroup) {
    filteredTeams = teams.filter(
      (team) => team.ageGroup === userInput[index].ageGroup
    );
  }
  const inputRef = useRef();
  useEffect(() => {
    if (index === 0) inputRef.current.focus();
  }, [index]);
  return (
    <div className="form_group_holder">
      <div className="form_group">
        <label htmlFor="name">Child name</label>
        <input
          ref={inputRef}
          type="text"
          name={index}
          className="form_input"
          placeholder="Name"
          id="name"
        />
        <p className="error">{errors && errors.name}</p>

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name={index}
          className="form_input"
          placeholder="Age"
          id="age"
        />
        <p className="error">{errors && errors.age}</p>
      </div>
      <div className="form_group">
        <label htmlFor="ageGroup">Select a team to join</label>
        <select defaultValue="" onChange={() => {}} name={index} id="ageGroup">
          <option disabled value="">
            SELECT AN AGE GROUP
          </option>
          {teamAgesList.map((age, index) => {
            return (
              <option key={age + index} value={age}>
                {age}
              </option>
            );
          })}
        </select>
      </div>
      {filteredTeams.length > 0 && (
        <div className="form_group">
          <label htmlFor="team">Select a team to join</label>
          <select defaultValue="" onChange={() => {}} name={index} id="team">
            <option disabled value="">
              SELECT A TEAM
            </option>
            {filteredTeams.map((team) => {
              return (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default AddChildInputs;
