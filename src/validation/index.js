import { createUser, createTeam, addPlayer } from "./joiSchemas";
import { jValidate } from "./joi";

export const validate = (type, payload) => {
  switch (type) {
    case 1: // add player validation
      return jValidate(addPlayer, payload);

    case 2:
      //validate new user
      return jValidate(createUser, payload);
    case 3:
      //validate new team
      return jValidate(createTeam, payload);

    default:
      console.log("Invalid type sent in!");
      break;
  }
};
