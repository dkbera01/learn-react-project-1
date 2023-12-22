import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos/todoSlice";

function Todo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [editedText, setEditedText] = useState(""); // State to track edited text
  const dispatch = useDispatch();

  const editTodo = (todo) => {
    if (isTodoEditable) {
      dispatch(updateTodo({ id: todo.id, text: editedText }));
      setIsTodoEditable((prev) => !prev);
    } else {
      setIsTodoEditable((prev) => !prev);
      setEditedText(todo.text);
    }
  };

  return (
    <>
      <li
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        key={todo.id}
      >
        <input
          type="text"
          className={`border outline-none  bg-transparent text-white rounded-lg ${
            isTodoEditable
              ? "border-black/10 px-2 bg-white text-black"
              : "border-transparent"
          }`}
          value={isTodoEditable ? editedText : todo.text}
          onChange={(e) => setEditedText(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <div className="flex">
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 mr-2"
            onClick={() => editTodo(todo)}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          >
            ❌
          </button>
        </div>
      </li>
    </>
  );
}

export default Todo;
