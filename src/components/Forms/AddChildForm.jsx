import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "../../validation";
import { useSelector } from "react-redux";
import { UPDATE_STORE } from "../../redux/types";
import AddChildInputs from "./AddChildInputs";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AddChildForm = () => {
  const teams = useSelector((state) => state.teams);
  const currentUser = useSelector((state) => state.currentUser);
  const token = useSelector((state) => state.token);
  const [userInput, setUserInput] = useState([]);
  const [errors, setErrors] = useState([]);
  const [noOfChildren, setNoOfChildren] = useState(1);
  const [redirect, setRedirect] = useState(false);

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

  const onSubmit = async () => {
    // if (Object.keys(errors).length === 0) {
    const errors = [];
    userInput.forEach((item) => {
      const error = validate(5, item);
      if (Object.keys(error).length > 0) errors.push(error);
    });

    setErrors(errors);
    if (errors.length === 0) {
      try {
        const result = await axios.post("http://localhost:6001/addChild", {
          userInput,
          currentUserId: currentUser.id,
        });
        if (result.data.status === 1) {
          const newData = await axios.get("http://localhost:6001/syncStore", {
            headers: { token },
          });

          dispatch({
            type: UPDATE_STORE,
            payload: newData.data,
          });
          setRedirect(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    // }
  };
  if (redirect === true) {
    return <Navigate replace to={"/dashboard"} />;
  }
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
                    errors={errors[index]}
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

          <button className="btn btn_primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddChildForm;
