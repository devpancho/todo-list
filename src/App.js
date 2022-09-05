import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './Form';
import { TodoList } from './TodoList';

function App() {
  const [textInput, setTextInput] = useState ("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState('all')
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    const statusHandler = () => {
      switch(filter){
        case 'completed':
          setFilteredList(todo.filter(theTodo => theTodo.completed === true))
          break;
        case 'uncompleted':
          setFilteredList(todo.filter(theTodo => theTodo.completed === false))
          break;
        default:
          setFilteredList(todo)
          break;
  
      }
    }
    statusHandler()
  }, [todo, filter])



 


  return (
    <div className="App">
      
      <header>
        <h1>THE BEST TO-DO LIST EVER </h1>
      </header>
      <Form todo={todo} setTodo={setTodo} textInput={textInput} setTextInput={setTextInput} setFilter={setFilter}  />
      <TodoList setTodo={setTodo} todo={todo} filteredList={filteredList} />
    </div>
  );
}

export default App;
