import React from 'react'

export const Form = ({setTextInput, textInput, setTodo, todo, setFilter }) => {
    const textInputHandler = (e) => {
        setTextInput(e.target.value)
    };
    const todoHandler = (e) => {
      e.preventDefault();
      setTodo([
        ...todo, {text: textInput, completed: false, id: Math.random() * 1000},
      ])
      setTextInput("")
    }

    const filterHandler = (e) => {
      setFilter(e.target.value)
    }
    return (
    <form>
      <input value={textInput} onChange={textInputHandler} type="text" className="todo-input" />
      <button onClick={todoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form> 
  )
}
