import { combineReducers } from "redux"
import { counterreader } from "./counter.reducer"
import { categoryreader } from "./category.reducer"

export const rootReducer  = combineReducers({
    count : counterreader,
    data : categoryreader
})