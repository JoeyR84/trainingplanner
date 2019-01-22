import React, { Component } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { addTaskTuesday } from "../actions/actions";
import { bindActionCreators } from "redux";

class Tuesday extends Component {
  render() {
    let input;
    return (
      <Container>
        <Weekday>Tuesday</Weekday>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.addTaskTuesday(input.value);
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add Task</button>
        </form>
        {this.props.tasks.tasks.tuesday.map(task => {
          return <li>{task}</li>;
        })}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTaskTuesday
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tuesday);

const Container = styled.div``;
const Weekday = styled.h3``;
const Button = styled.button``;
const Input = styled.input``;
