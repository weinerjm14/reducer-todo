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
      id: 3892987582,
    },
    {
      item: "Play with kitty",
      completed: false,
      id: 3892987589,
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
      return {
        ...state,
        toDoItems: state.toDoItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        }),
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
