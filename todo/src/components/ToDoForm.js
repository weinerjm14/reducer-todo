import React, { useReducer, useState } from "react";

import { Reduce, InitialState } from "../Reducers/UseReducer";
import ToDoList from "./ToDoList";

function ToDoForm() {
  const [state, dispatch] = useReducer(Reduce, InitialState);
  const [item, setItem] = useState("");

  const handleChanges = (e) => {
    // console.log("handle changes", e.target.value);
    setItem(e.target.value);
  };

  const submitItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: item });
    setItem("");
  };



  const toggleComplete = (ID) => {
    // console.log("toggle:", props.item.id);
    dispatch({ type: "TOGGLE_COMPLETE", payload: ID });
  };

  return (
    <section className="inputForm">
      <form onSubmit={submitItem}>
        <label htmlFor="item">Enter Task</label>
        <input type="text" name="item" value={item} onChange={handleChanges} />
        <button className="addItem">Add Task</button>
      </form>
      <ToDoList
        item={state.toDoItems}
        dispatch={dispatch}
        toggle={toggleComplete}
      />
    </section>
  );
}

export default ToDoForm;
