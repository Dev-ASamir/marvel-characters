import { combineReducers } from "redux";
import LangReducer from "./Lang";

export default combineReducers({
  lang: LangReducer,
});
