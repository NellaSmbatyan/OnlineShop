import { cartReducer } from "./reducer";
import { combineReducers } from "redux";
const rootred = combineReducers(
    {
        cartReducer
    }
)
export default rootred