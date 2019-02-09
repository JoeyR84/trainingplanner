import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Routine = props => {
  if (!props.auth.uid) {
    return <Redirect to='/signin' />;
  }
  if (props.routine) {
    return (
      <Container>
        <div>
          <Title>{props.routine.title}</Title>
          <List>
            {props.routine.tasks
              ? props.routine.tasks.map(task => {
                  return <Task key={task}>{task}</Task>;
                })
              : null}
          </List>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const routines = state.firestore.data.routines;
  const routine = routines ? routines[id] : null;
  return {
    routine,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'routines' }])
)(Routine);

const Container = styled.div``;
const List = styled.div``;
const Task = styled.p``;
const Title = styled.h2``;
