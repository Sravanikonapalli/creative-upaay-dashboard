import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import filtersReducer from "./filtersReducer";

export default combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
