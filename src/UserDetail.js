import React from 'react';
import Todo from './Todo';

const UserDetail = props => {
  console.log(props)

  let userDetail = props.users.find(user => user._id === props.match.params.id)
  let uncompletedTodos = []
  let completedTodos = []
    
  userDetail.todos.forEach(todo => {
    let todoComponent = (
      <Todo todo={todo} userId={userDetail._id} toggleDone={props.toggleDone} />
    );

    todo.done 
    ? completedTodos.push(todoComponent) 
    : uncompletedTodos.push(todoComponent)
  });

  return (
    <div>
      <form
        onSubmit={props.handleNewTodoSubmit}
        onChange={props.handleChange}
        id={userDetail._id}
      >
        <input
          type="text"
          name="newTodoDescription"
          placeholder="New Todo! Get er done!"
          value={props.newTodoDescription}
        />
        <input type="submit" />
      </form>

      <h2>{userDetail.name} TODOS</h2>
      <ul>{uncompletedTodos}</ul>

      <h2>COMPLETED TODOS</h2>
      <ul>{completedTodos}</ul>
    </div>
  );
  }

export default UserDetail