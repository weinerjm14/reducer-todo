import React, { useReducer } from "react";

function ToDoList(props) {
  console.log("todolist props", props);
  const clearDone = (e) => {
    e.preventDefault();
    props.dispatch({ type: "CLEAR_COMPLETE" });
  };

  return (
    <div>
      {props.item.map((item) => (
        <li
          onClick={() => props.toggle(item.id)}
          className={`todo${item.completed ? " done" : ""}`}
          key={item.id}>
          ToDo: {item.item}
        </li>
      ))}
      <button onClick={clearDone}>GET RID OF SHIT</button>
    </div>
  );
}
export default ToDoList;
