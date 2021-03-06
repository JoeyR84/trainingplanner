export const createRoutine = routine => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //do async stuff
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection('routines')
      .add({
        ...routine,
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        userId: userId,
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
