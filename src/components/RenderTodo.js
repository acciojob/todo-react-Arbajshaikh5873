import React from "react";

function RenderTodo({ todo, handleDeleteClick }) {
  console.log(todo);
  return (
    <ul>
      <li>
        {todo.task}{" "}
        <button
          onClick={() => {
            handleDeleteClick(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

export default RenderTodo;
