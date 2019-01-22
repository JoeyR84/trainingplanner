import { combineReducers } from "redux";

import tasks from "./reducer";

const rootReducer = combineReducers({
  tasks
});

export default rootReducer;
