import React from 'react'

const Todo = ({text, theTodo, todo, setTodo}) => {
    const deleteHandler = () => {
        setTodo(todo.filter(el => el.id !== theTodo.id))
    }
    const completeHandler = () => {
        setTodo(todo.map (el => {
            if (el.id === theTodo.id){
                return{
                    ...el, completed: !el.completed
                }
            }
            return el;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${theTodo.completed ? "completed" : ''}`}> {text}</li>
        <button onClick={completeHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}


export default Todo
