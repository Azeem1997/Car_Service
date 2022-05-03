import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducers";
import thunk from "redux-thunk";
export const store = createStore(userReducer,applyMiddleware(thunk));
