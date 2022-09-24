import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_PLAYERS } from "../redux/types";

const Search = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search Name"
      className="form_input search_input"
      name="search_input"
      onInput={(e) => {
        dispatch({
          type: SEARCH_PLAYERS,
          payload: e.target.value,
        });
      }}
    />
  );
};

export default Search;
