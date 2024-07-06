import { combineReducers } from "redux"
import { counterreader } from "./counter.reducer"

export const rootReducer  = combineReducers({
    count : counterreader
})