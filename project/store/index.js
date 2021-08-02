import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  reducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
