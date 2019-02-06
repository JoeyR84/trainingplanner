const initialState = {
  routines: [
    {
      id: '1',
      title: 'power',
      tasks: [
        { id: '1', task: 'power task one' },
        { id: '2', task: 'power task two' }
      ]
    },
    {
      id: '2',
      title: 'endurance',
      tasks: [
        { id: '1', task: 'endurance task one' },
        { id: '2', task: 'endurance task two' }
      ]
    },
    {
      id: '3',
      title: 'therapy',
      tasks: [
        { id: '1', task: 'therapy task one' },
        { id: '2', task: 'therapy task two' }
      ]
    }
  ]
};

const routineReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ROUTINE':
      console.log('created routine', action.routine);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default:
      return state;
  }
};

export default routineReducer;
