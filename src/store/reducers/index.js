import { combineReducers } from "redux";

import statusReducer from "./status.reducer";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import themeReducer from "./theme.reducer";

export default combineReducers({
  authReducer,
  statusReducer,
  userReducer,
  themeReducer,
});
