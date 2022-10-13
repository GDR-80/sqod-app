import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "../../validation";
import { useSelector } from "react-redux";
import { ADD_CHILD } from "../../redux/types";
import AddChildInputs from "../AddChildInputs";
import { Link } from "react-router-dom";

const AddChildForm = () => {
  const teams = useSelector((state) => state.teams);
  const [userInput, setUserInput] = useState([]);
  const [errors, setErrors] = useState();
  const [noOfChildren, setNoOfChildren] = useState(1);

  const dispatch = useDispatch();
  const getChild = (name) => {
    return userInput[Number(name)]
      ? userInput[Number(name)]
      : { name: "", age: "", team: "" };
  };

  const onUserInput = (e) => {
    const _userInput = [...userInput];
    const copy = getChild(e.target.name);
    copy[e.target.id] = e.target.value;
    _userInput[Number(e.target.name)] = copy;
    setUserInput(_userInput);
    // const result = validate(4, _userInput);
    // setErrors(result);
  };

  const onAddChildrenInput = () => {
    setNoOfChildren(noOfChildren + 1);
  };

  const onRemove = (i) => {
    if (i + 1 === noOfChildren) {
      const _userInput = [...userInput];
      _userInput.splice(i, 1);
      setNoOfChildren(noOfChildren - 1);
      setUserInput(_userInput);
    }
  };

  const onSubmit = () => {
    // if (Object.keys(errors).length === 0) {

    dispatch({
      type: ADD_CHILD,
      payload: { children: userInput },
    });

    setUserInput({});
    // }
  };
  return (
    <>
      <h2>Add a Child</h2>
      <div className="form create_user_form wide">
        <div className="form_input_container" onInput={onUserInput}>
          {Array(noOfChildren)
            .fill()
            .map((input, index, array) => {
              return (
                <div key={index}>
                  <AddChildInputs
                    key={index}
                    index={index}
                    errors={errors}
                    teams={teams}
                    userInput={userInput}
                  />
                  {index === array.length - 1 && index > 0 && (
                    <button
                      className="btn btn_delete"
                      onClick={() => onRemove(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
        </div>

        <div className="button_group">
          <button className="btn btn_primary" onClick={onAddChildrenInput}>
            Add Child
          </button>
          <Link to="/dashboard">
            <button className="btn btn_primary" onClick={onSubmit}>
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddChildForm;