import { ADD_TASK_MONDAY, ADD_TASK_TUESDAY } from "../actions/actions";
// todo get rid of tasks level of abstraction for state
const initialState = {
  tasks: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_TASK_MONDAY:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          monday: [...state.tasks.monday, action.payload]
        }
      };
    case ADD_TASK_TUESDAY:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          tuesday: [...state.tasks.tuesday, action.payload]
        }
      };
    default:
      return state;
  }
}
