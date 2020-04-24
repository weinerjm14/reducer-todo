// import React, { useReducer } from "react";

const InitialState = {
  toDoItems: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      item: "Learn about redux",
      completed: false,
      id: 3892987590,
    },
  ],
};
const Reduce = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state);
      return {
        ...state,
        toDoItems: [
          ...state.toDoItems,
          {
            item: action.payload,
            id: Date.now(),
            completed: false,
          },
        ],
      };
    case "TOGGLE_COMPLETE":
      const newToDoItems = state.toDoItems.map(item => {
        if (action.payload === item.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
      return {
        ...state,
        toDoItems: [...newToDoItems],
      };

    case "CLEAR_COMPLETE":
      return {
        ...state,
        toDoItems: state.toDoItems.filter(item => !item.completed),
      };

    default:
      return state;
  }
};

export { InitialState, Reduce };
