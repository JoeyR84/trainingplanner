import React from 'react';
import styled from 'styled-components';

const Routine = ({ routine }) => {
  return (
    <Container>
      <Title>{routine.title}</Title>
      <p>
        Created by {routine.userFirstName} {routine.userLastName}
      </p>
      <TasksContainer>
        {routine.tasks.map(task => {
          return <Task key={task}>{task}</Task>;
        })}
      </TasksContainer>
    </Container>
  );
};

export default Routine;

const Container = styled.div``;
const Title = styled.h3``;
const TasksContainer = styled.div``;
const Task = styled.p``;
