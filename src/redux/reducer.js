import { initialState } from "./initialState";
import { getItem, storeItem } from "../localStorage";
import {
  SET_SCREEN,
  SEARCH_PLAYERS,
  ADD_PLAYER,
  DELETE_PLAYER,
  EDIT_PLAYER,
  CREATE_USER,
  SET_CURRENT_USER,
  SET_USER_TYPE,
  CREATE_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  ADD_CHILD,
  SET_APPROVED,
  CREATE_FIXTURE,
} from "./types";
import { searchFilter, generateRandomId } from "../utils";
// import { players } from "../fakeApi";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    case CREATE_USER: {
      const users = [...state.users];
      let currentUser = { ...state.currentUser };
      const { name, email, phone, password } = action.payload;
      const newUser = {
        id: generateRandomId(64),
        name,
        email,
        phone,
        password,
        // teams: [],
      };

      currentUser = newUser;

      users.push(newUser);

      const newState = { ...state, users, currentUser };

      storeItem("store", newState);

      return newState;
    }

    case SET_USER_TYPE: {
      const users = [...state.users];
      const currentUser = { ...state.currentUser };
      let screenMode = { ...state.screenMode };

      const user = users.find((user) => currentUser.id === user.id);

      user.userType = action.payload;

      screenMode = 0;

      const newState = { ...state, users, screenMode };
      storeItem("store", newState);

      return newState;
    }

    case ADD_CHILD: {
      const users = [...state.users];
      let currentUser = { ...state.currentUser };
      const user = users.find((user) => currentUser.id === user.id);

      const { children } = action.payload;
      user.children = children;
      user.children.forEach((child) => {
        child.approved = false;
        child.id = generateRandomId(64);
      });
      currentUser = user;

      const newState = { ...state, users, currentUser };
      storeItem("store", newState);

      return newState;
    }

    case SET_APPROVED: {
      const users = [...state.users];

      // const teams = [...state.teams];
      // const team = teams.find((team) => team.id == action.payload.team);

      users.forEach((user) => {
        if (user.children) {
          user.children.forEach((child) => {
            if (child.id === action.payload.id) {
              // child.approved = true;
              child.approved === false
                ? (child.approved = true)
                : (child.approved = false);
            }
          });
        }
      });

      // if (team.players && !team.players.includes(action.payload.id)) {
      //   team.players.push(action.payload.id);
      // } else {
      //   team.players = [];
      //   team.players.push(action.payload.id);
      // }
      const newState = { ...state, users };
      storeItem("store", newState);

      return newState;
    }

    case SET_SCREEN: {
      const newState = { ...state, screenMode: action.payload };

      return newState;
    }

    case SET_CURRENT_USER: {
      const newState = { ...state, currentUser: action.payload };
      storeItem("store", newState);
      return newState;
    }

    case CREATE_TEAM: {
      const users = [...state.users];
      const currentUser = { ...state.currentUser };
      const teams = [...state.teams];
      const { name, ageGroup, line1, line2, city, postCode } = action.payload;
      const newTeam = {
        id: generateRandomId(64),
        name,
        ageGroup,
        manager: currentUser.id,
        venue: {
          address: {
            line1,
            line2,
            city,
            postCode,
          },
        },
      };

      teams.push(newTeam);
      const user = users.find((user) => user.id === currentUser.id);

      if (!user.teams) {
        user.teams = [];
      }

      !user.teams ? (user.teams = []) : user.teams.push(newTeam.id);

      // user.teams.length > 0
      //   ? user.teams.push(newTeam.id)
      //   : (user.teams = [].push(newTeam.id));

      console.log(user.teams);

      currentUser.teams = user.teams;
      // check to see if works!!!!!
      const newState = { ...state, teams, users, currentUser };

      // storeItem("store", newState);

      return newState;
    }

    case CREATE_FIXTURE: {
      const fixtures = [...state.fixtures];

      const { fixture, teamId } = action.payload;

      const newFixture = {
        id: generateRandomId(64),
        date: Math.floor(new Date(fixture.date).getTime() / 1000),
        meetTime: fixture.meetTime,
        kickOff: fixture.kickOff,
      };

      if (fixture.venue === "home") {
        newFixture.homeTeam = teamId;
        newFixture.awayTeam = fixture.opposition;
      } else if (fixture.venue === "away") {
        newFixture.homeTeam = fixture.opposition;
        newFixture.awayTeam = teamId;
      }

      fixtures.push(newFixture);

      const newState = { ...state, fixtures };

      return newState;
    }

    case EDIT_TEAM: {
      const teams = [...state.teams];
      const team = teams.find((team) => team.id === action.payload.id);

      if (!team) return;

      const { name, ageGroup, venue, postCode } = action.payload;
      team.name = name;
      team.ageGroup = ageGroup;
      team.venue = venue;
      team.postCode = postCode;

      const newState = { ...state, teams };

      storeItem("store", newState);

      return newState;
    }

    case DELETE_TEAM: {
      const currentUser = { ...state.currentUser };
      const teamToDelete = currentUser.teams.indexOf(action.payload);

      currentUser.teams.splice(teamToDelete, 1);

      const newState = { ...state, currentUser };

      // storeItem("store", newState);
      return newState;
    }

    case ADD_PLAYER: {
      const players = [...state.players];

      const newPlayer = {
        id: generateRandomId(64),
        name: action.payload.name,
        age: action.payload.age,
      };

      players.push(newPlayer);

      const newState = { ...state, players, filteredData: {} };

      storeItem("store", newState);

      return newState;
    }

    case EDIT_PLAYER: {
      const players = [...state.players];
      const player = players.find((player) => player.id === action.payload.id);

      if (!player) return;

      const { name, age } = action.payload;
      player.name = name;
      player.age = age;

      const newState = { ...state, players, filteredData: {} };

      storeItem("store", newState);

      return newState;
    }

    case DELETE_PLAYER: {
      const players = [...state.players];

      const playerToDelete = players.findIndex(
        (item) => item.id === action.payload
      );

      players.splice(playerToDelete, 1);

      const newState = { ...state, players, filteredData: {} };

      storeItem("store", newState);
      return newState;
    }

    case SEARCH_PLAYERS:
      const filteredData = searchFilter([...state.players], action.payload);

      return {
        ...state,
        filteredData,
      };

    default:
      return state;
  }
}
