import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";

// Add firebase to reducers
const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});

export default rootReducer;
