import React, { Component } from "react";

// components
import List from "../routine/List";

export default class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <List />
      </div>
    );
  }
}
