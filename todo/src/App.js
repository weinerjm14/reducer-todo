import React, { useReducer } from "react";
import "./App.css";

import ToDoList from "./components/ToDoList";
// import { ToDoItems, Reduce } from "./Reducers/UseReducer";

function App() {
  return (
    <div className="app-container">
      <h2>Welcome to the Task Master To Do App</h2>
      <ToDoList />
    </div>
  );
}

export default App;
