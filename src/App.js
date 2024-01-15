import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Task from './Components/Task/Task';
import TaskInput from './Components/TaskInput/TaskInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, title: 'Learn React', done: true },
        { id: 1, title: 'Learn Angular', done: true },
        { id: 2, title: 'Learn Vue', done: false },
      ],
    };
  }

  // TODO: test TODO

  changeHandler = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });

    this.setState({ tasks });
  };

  addTaskHandler = (title) => {
    if (title) {
      const tasks = [...this.state.tasks];

      tasks.unshift({
        id: this.state.tasks.length ? this.state.tasks.length : 0,
        title: title,
        done: false,
      });

      this.setState({ tasks });
    }
  };

  deleteTaskHandler = (id) => {
    const tasks = [...this.state.tasks.filter((task) => task.id !== id)];

    this.setState({ tasks });
  };

  render() {
    const finishedTasks = this.state.tasks.filter((task) => task.done);
    const unfinishedTasks = this.state.tasks.filter((task) => !task.done);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="active-tasks">
          Active Tasks: {unfinishedTasks.length}
        </div>
        <TaskInput addTaskHandler={this.addTaskHandler} />
        {[...unfinishedTasks, ...finishedTasks].map((task, index) => {
          return (
            <Task
              key={index}
              checked={task.done}
              changeHandler={this.changeHandler.bind(this, task.id)}
              deleteTaskHandler={this.deleteTaskHandler.bind(this, task.id)}
              title={task.title}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
