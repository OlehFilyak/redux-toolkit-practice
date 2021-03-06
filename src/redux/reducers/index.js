import { combineReducers } from "redux";
import { filterReducer } from "./filter";
import { todoReducer } from "./todo";

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
