import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";

import videoReducer from "./videoReducer";

// Add firebase to reducers
const rootReducer = combineReducers({
  auth: authReducer,
  upload: videoReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
