import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Astronaut's To-Do List</h1>
    </div>
  );
};

export default AppHeader;
