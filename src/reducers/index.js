import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducers = combineReducers({
  data: dataReducer,
});

export default rootReducers;
