import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
//components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = props => {
  const links = props.auth.uid ? (
    <SignedInLinks profile={props.profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav>
      <Container>
        <h1>Training Planner</h1>
        <Link to='/'>Home</Link>
        {links}
      </Container>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
