import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../reducers/postReducer";

const reducer = combineReducers({
    posts: postReducer,
});

// configureStore accepts a single object rather than multiple function arguments. its because under the hood, the store has been configured to allow using the Redux Dev Tools Extention and has had some Redux middleware included by default
const store = configureStore({
    reducer,
});

export default store;
