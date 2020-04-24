import React, { useReducer } from "react";
import "./App.css";
import { InitialState, Reduce } from "./Reducers/UseReducer";

import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
// import { ToDoItems, Reduce } from "./Reducers/UseReducer";

function App() {
  const [state, dispatch] = useReducer(Reduce, InitialState);
  console.log("app:", state.toDoItems);
  return (
    <div className="app-container">
      <h2>Welcome to the Task Master To Do App</h2>
      <ToDoForm />
      <ToDoList item={state.toDoItems} dispatch={dispatch} />
    </div>
  );
}

export default App;
