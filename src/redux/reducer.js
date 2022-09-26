import { initialState } from "./initialState";
import { getItem, storeItem } from "../localStorage";
import {
  SEARCH_PLAYERS,
  ADD_PLAYER,
  DELETE_PLAYER,
  EDIT_PLAYER,
} from "./types";
import { searchFilter, generateRandomId, resetFilteredData } from "../utils";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    case ADD_PLAYER: {
      const players = [...state.players];
      let filteredData = { ...state.filteredData };

      resetFilteredData(filteredData);
      const newPlayer = {
        id: generateRandomId(64),
        name: action.payload.addPlayerName,
        age: action.payload.addPlayerAge,
      };

      players.push(newPlayer);

      const newState = { ...state, players };

      storeItem("store", newState);

      return newState;
    }

    case EDIT_PLAYER: {
      const players = [...state.players];
      const player = players.find((player) => player.id === action.payload.id);
      let filteredData = { ...state.filteredData };

      resetFilteredData(filteredData);

      if (!player) return;

      const { name, age } = action.payload;
      player.name = name;
      player.age = age;

      const newState = { ...state, players };

      storeItem("store", newState);

      return newState;
    }

    case DELETE_PLAYER: {
      const players = [...state.players];
      let filteredData = { ...state.filteredData };

      resetFilteredData(filteredData);
      const playerToDelete = players.findIndex(
        (item) => item.id === action.payload
      );

      players.splice(playerToDelete, 1);

      const newState = { ...state, players, filteredData };

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
