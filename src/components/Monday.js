import React, { Component } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { addTaskMonday } from "../actions/actions";
import { bindActionCreators } from "redux";

class Monday extends Component {
  render() {
    let input;
    return (
      <Container>
        <Weekday>Monday</Weekday>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.addTaskMonday(input.value);
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add Task</button>
        </form>
        {this.props.tasks.tasks.monday.map(task => {
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
      addTaskMonday
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Monday);

const Container = styled.div``;
const Weekday = styled.h3``;
const Button = styled.button``;
const Input = styled.input``;
