import React from "react";
import { Link } from "react-router-dom";
//components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Training Planner</h1>
        <Link to="/">Home</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default NavBar;
