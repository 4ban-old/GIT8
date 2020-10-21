import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import themeReducer from "./theme.reducer";
import loadingReducer from "./loading.reducer";

export default combineReducers({
  authReducer,
  userReducer,
  themeReducer,
  loadingReducer,
});
