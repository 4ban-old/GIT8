import { combineReducers } from "redux";

import sessionReducer from './session.reducer'
import settingsReducer from './settings.reducer'

export default combineReducers({
  sessionReducer,
  settingsReducer
});
