import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import Header from "./components/Header";
import Monday from "./components/Monday";
import Tuesday from "./components/Tuesday";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const middleware = [logger];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Monday />
        <Tuesday />
      </Provider>
    );
  }
}

export default App;
