import React, { Component } from 'react';
import styled from 'styled-components';
// components
import RoutineList from '../routine/RoutineList';
import Notifications from '../notifications/Notifications';
//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
//firebase
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    const { routines } = this.props;
    return (
      <Container>
        <div>
          <RoutineList routines={routines} />
        </div>
        <div>
          <Notifications />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    routines: state.firestore.ordered.routines
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'routines' }])
)(Dashboard);

const Container = styled.div``;
