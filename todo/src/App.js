import React, { useReducer } from "react";
import "./App.css";

import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <div className="app-container">
      <h2>Welcome to the Task Master To Do App</h2>
      <ToDoForm />
    </div>
  );
}

export default App;
