import React from "react";
import Routine from "./Routine";

const List = () => {
  return (
    <div>
      <Routine title="one thing to do" id={1} />
      <Routine title="Another thing to do" id={2} />
    </div>
  );
};

export default List;
