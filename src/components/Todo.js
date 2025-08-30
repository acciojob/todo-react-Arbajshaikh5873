import React, { useState } from "react";
import RenderTodo from "./RenderTodo";

function Todo() {
  let [list, setList] = useState([]);
  let [task, setTask] = useState("");

  function handleChange(event) {
    console.log("Input changing...", event.target.value);
    setTask(event.target.value);
  }

  function handleClick() {
    console.log("button is clicked", list);
    setList((prevList) => {
      prevList.push({ id: parseInt(Math.random() * 1000), task: task });
      return prevList;
    });
    setTask("");
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        onChange={handleChange}
        placeholder="Enter the Todo"
        value={task}
      />
      <button onClick={handleClick}>Add Todo</button>
      {list.map((todo) => (
        <RenderTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Todo;
