import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer, 
    messagesPage: messagesPageReducer, 
    // sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
