import React from "react";

function TodoItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} deleteTodoProps={props.deleteTodoProps} /> {props.todo.title}
      <button>Delete</button>
    </li>
  );
}

export default TodoItem;
