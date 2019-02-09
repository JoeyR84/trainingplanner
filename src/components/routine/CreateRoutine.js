import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//redux stuff
import { connect } from 'react-redux';
// actions
import { createRoutine } from '../../store/actions/routineActions';

class CreateRoutine extends Component {
  state = {
    task: '',
    routine: {
      title: '',
      tasks: []
    }
  };
  handleTitleChange = e => {
    this.setState({
      routine: {
        ...this.state.routine,
        title: e.target.value
      }
    });
  };
  handleTaskChange = e => {
    this.setState({
      task: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createRoutine(this.state.routine);
    this.props.history.push('/');
  };
  handleAddTask = e => {
    e.preventDefault();
    this.setState({
      routine: {
        ...this.state.routine,
        tasks: [...this.state.routine.tasks, this.state.task]
      },
      task: ''
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to='/signin' />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>New Routine</h5>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              value={this.state.routine.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor='task'>Task</label>
            <input
              type='text'
              id='task'
              value={this.state.task}
              onChange={this.handleTaskChange}
            />
            <button onClick={this.handleAddTask}>Add</button>
          </div>
          <div>
            {this.state.routine.tasks.map(e => {
              return <p>{e}</p>;
            })}
          </div>
          <div>
            <button>Add Routine</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRoutine: routine => dispatch(createRoutine(routine))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoutine);
