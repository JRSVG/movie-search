import searchReducer from "./search-reducer";
import userReducer from "./user-reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  search: searchReducer,
  user: userReducer
});

export default reducers;
