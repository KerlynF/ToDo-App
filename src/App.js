import React from 'react';
import './App.css';
import {ToDoCounter} from './components/ToDoCounter.js';
import ToDoSearch from './components/TodoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import ToDoButton from './components/ToDoButton';

function App() {

  const todoItems = [{
    text: "fregar platos",
    completed: false
  },{
    text: "hacer tarea",
    completed: false
  },{
    text: "Hacer las compras",
    completed: false
  }];


  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {todoItems.map((item) => (
          <ToDoItem key={item.text} text={item.text}/>
        ))}
      </ToDoList>

      <ToDoButton/>
    </React.Fragment>
  );
}

export default App;
