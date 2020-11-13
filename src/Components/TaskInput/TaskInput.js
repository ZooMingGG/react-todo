import React from 'react';
import './TaskInput.css';

class TaskInput extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        input: ''
      }
    }

    inputHandler = event => {
      this.setState({
        input: event.target.value
      });
    }

    addTaks = title => {
      this.props.addTaskHandler(title);

      this.setState({input: ''});
    }

    enterHandler = event => {
      if (event.key === 'Enter') {
        this.addTaks(this.state.input);
      }
    }

    render() {
      return (
        <div className="TaskInput"> 
          <input className="input" onKeyPress={this.enterHandler} onChange={this.inputHandler} value={this.state.input} type="text" />
          <button className="add-task-btn" onClick={this.addTaks.bind(this, this.state.input)}>+</button>
        </div>
      );
    }
};

export default TaskInput;
