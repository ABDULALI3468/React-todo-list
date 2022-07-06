import React from "react";
import TodosItem from "./TodoItem";
class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodosItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps} setUpdate={this.props.setUpdate} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
