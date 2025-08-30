import React from "react";

function RenderTodo({ todo }) {
  console.log(todo);
  return <div>{todo.task}</div>;
}

export default RenderTodo;
