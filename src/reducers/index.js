import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducers = combineReducers({
  allData: dataReducer,
});

export default rootReducers;
