import React, { useReducer } from "react";

function ToDoList(props) {
  console.log("todolist props", props);
  const toggleComplete = ID => {
    console.log("toggle:", props.item.id);
    props.dispatch({ type: "TOGGLE_COMPLETE", payload: ID });
  };
  return (
    <div className="todolist">
      {props.item.map(item => {
        return (
          <div
            onClick={() => toggleComplete(item.id)}
            className={`todo${item.completed ? " done" : ""}`}
            key={item.id}
          >
            <h3> ToDo: {item.item}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default ToDoList;
