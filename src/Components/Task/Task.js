import React from 'react';
import './Task.css';

const Task = props => {
    return (
      <div className="Task">
        <input className="task-checkbox" onChange={props.changeHandler} type="checkbox" checked={props.checked} />
        <p style={{textDecoration: props.checked ? 'line-through' : null}} className="task-text">{props.title}</p>
        <button className="task-delete-btn" onClick={props.deleteTaskHandler}>&times;</button>
      </div>
    );
};

export default Task;
