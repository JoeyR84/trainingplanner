import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//redux
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

// todo add the routing to function on succesful logout as a .then (if its a promise)
const SignedInLinks = props => {
  return (
    <Container>
      <div>
        <p onClick={props.signOut}>Log Out</p>
      </div>
      <div>
        <NavLink to='/createroutine'>New Routine</NavLink>
      </div>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

const Container = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;
