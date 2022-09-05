import React from 'react'
import Todo from './Todo'

export const TodoList = ({todo, setTodo, filteredList}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredList.map((theTodo) =>(
          <Todo key={theTodo.id} theTodo={theTodo} text={theTodo.text} setTodo={setTodo} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
