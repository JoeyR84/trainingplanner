import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import RoutineDetails from './components/routine/RoutineDetails';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import CreateRoutine from './components/routine/CreateRoutine';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/Routine/:id' component={RoutineDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createroutine' component={CreateRoutine} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;

const Container = styled.div`
  padding: 20px;
`;
