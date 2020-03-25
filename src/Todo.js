import React from 'react';

export default function Todo(props){
  return (
    <li>
      {props.todo.description}{" "}
      <button
        id={props.userId}
        data-todo-id={props.todo._id}
        onClick={props.toggleDone}
      >
        {props.todo.done ? "undone" : "done"}
      </button>
    </li>
  );
}

