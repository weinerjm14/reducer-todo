import React, { useReducer } from "react";
import { InitialState, Reduce } from "../Reducers/UseReducer";

function ToDoList() {
  const [state, dispatch] = useReducer(Reduce, InitialState);
  return (
    <div className="todolist">
      {state.toDoItems.map(item => {
        return (
          <div className="todoitem" key={item.id}>
            <h3> ToDo: {item.item}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default ToDoList;
