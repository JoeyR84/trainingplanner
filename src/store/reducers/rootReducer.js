import { combineReducers } from 'redux';
// reducers
import authReducer from './authReducer';
import routineReducer from './routineReducer';
//firebase
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer = combineReducers({
  auth: authReducer,
  routine: routineReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
