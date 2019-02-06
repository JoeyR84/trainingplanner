import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
//components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <h1>Training Planner</h1>
        <Link to='/'>Home</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </Container>
    </nav>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(NavBar);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
