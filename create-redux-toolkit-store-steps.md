#Create Store
create src/app/store.js

```bash

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

```

#Create Reducer
create src/features/todos/todoSlice.js

```bash
	import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello reducer",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
		// Note: change with your functionality
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(newTodo);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((prev) =>
        prev.id == action.payload.id
          ? { ...prev, text: action.payload.text }
          : prev
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;


```
