export const createRoutine = routine => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //do async stuff
    const firestore = getFirestore();
    firestore
      .collection('routines')
      .add({
        ...routine,
        userFirstName: 'DummyFirst',
        userLastName: 'DummyLast',
        userId: 1234,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_ROUTINE', routine });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', error });
      });
  };
};
