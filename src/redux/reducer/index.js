import { combineReducers } from "redux";

import filterReducer from "./filter";
import todoListReducer from "./todoList";

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter,action),
//         todoList: todoListReducer(state.todoList,action)
//     }
// }

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoListReducer
})
export default rootReducer;
// https://www.youtube.com/watch?v=g_K1w8e0lLo
//  dang xem 44:12