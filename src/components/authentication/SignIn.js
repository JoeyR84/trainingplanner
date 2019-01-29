import React, { Component } from "react";

export default class SignIn extends Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={null}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={null} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={null} />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
