import { createSelector } from "reselect";
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todosRemaining =   state.todoList.filter((todo)=>{
//         return todo.name.includes(searchText);
//     })
//     return todosRemaining;
// };
export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filter.search;
export const searchStatusSelector = (state) => state.filter.status;
export const searchPrioritySelector = (state) => state.filter.priority;
export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPrioritySelector,
    (todoList, searchText, searchStatus,searchPriorities ) => {
        return todoList.filter(todo => {
            if (searchStatus === "All") {
                return searchPriorities.length ? todo.name.includes(searchText) && searchPriorities.includes(todo.priority) : todo.name.includes(searchText)
            }
            return  (todo.name.includes(searchText)) &&(searchStatus === "Completed" ? 
            todo.complete : !todo.complete) && (searchPriorities.length ? searchPriorities.includes(todo.priority):true) ;
        })
    });