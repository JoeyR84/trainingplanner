import React from "react";

const Routine = props => {
  const id = props.match.params.id;
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <p>{id}</p>
        <ul>
          <li>Some exercise</li>
          <li>Some exercise</li>
          <li>Some exercise</li>
        </ul>
      </div>
    </div>
  );
};

export default Routine;
