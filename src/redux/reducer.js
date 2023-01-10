import { initialState } from "./initialState";
import { getItem, storeItem } from "../localStorage";
import {
  SET_SCREEN,
  CREATE_USER,
  UPDATE_STORE,
  SET_TOKEN,
  LOG_OUT,
} from "./types";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    case CREATE_USER: {
      let currentUser = { ...state.currentUser };
      const { name, email, phone, password } = action.payload;
      const newUser = {
        name,
        email,
        phone,
        password,
      };

      currentUser = newUser;

      const newState = { ...state, currentUser };

      storeItem("store", newState);

      return newState;
    }

    case SET_TOKEN: {
      const newState = { ...state, token: action.payload };
      storeItem("store", newState);

      return newState;
    }

    case SET_SCREEN: {
      const newState = { ...state, screenMode: action.payload };

      return newState;
    }

    case UPDATE_STORE: {
      const newState = { ...state, ...action.payload };

      storeItem("store", newState);

      return newState;
    }

    case LOG_OUT: {
      const newState = { ...initialState };

      storeItem("store", newState);

      return newState;
    }

    default:
      return state;
  }
}
