import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers"
import {thunk} from "redux-thunk";
const initialState = {}

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)
