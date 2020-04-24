import React, { useReducer, useState } from "react";

import { Reduce, InitialState } from "../Reducers/UseReducer";

function ToDoForm() {
  const [state, dispatch] = useReducer(Reduce, InitialState);
  const [item, setItem] = useState("");

  const handleChanges = e => {
    console.log("handle changes", e.target.value);
    setItem(e.target.value);
  };

  const submitItem = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: item });
  };
  const clearDone = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETE" });
  };
  return (
    <section className="inputForm">
      <form onSubmit={submitItem}>
        <label htmlFor="item">Enter Task</label>
        <input type="text" name="item" value={item} onChange={handleChanges} />
        <button type="submit" className="addItem">
          Add Task
        </button>
        <button type="button" onClick={clearDone} className="clearComplete">
          Clear Completed
        </button>
      </form>
    </section>
  );
}

export default ToDoForm;
