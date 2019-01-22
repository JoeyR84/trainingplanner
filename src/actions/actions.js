export const ADD_TASK_MONDAY = "ADD_TASK_MONDAY";
export const ADD_TASK_TUESDAY = "ADD_TASK_TUESDAY";
export function addTaskMonday(task) {
  return {
    type: "ADD_TASK_MONDAY",
    payload: task
  };
}

export function addTaskTuesday(task) {
  return {
    type: "ADD_TASK_TUESDAY",
    payload: task
  };
}

export function toggleTask() {}
