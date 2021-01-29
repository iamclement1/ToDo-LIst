import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './Todo_List';

var destination = document.querySelector('#app');

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
);
