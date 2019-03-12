import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import modeReducer from "./modeReducer";

export default combineReducers({
  articles: articlesReducer,
  editMode: modeReducer
});
