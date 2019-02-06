import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignedOutLinks = () => {
  return (
    <Container>
      <div>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
      <div>
        <NavLink to='/signin'>Log In</NavLink>
      </div>
    </Container>
  );
};

export default SignedOutLinks;

const Container = styled.div`
  display: flex;
`;
