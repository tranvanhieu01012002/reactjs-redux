
export const todoListSelector = (state) => {
    const searchText = searchTextSelector(state)
    const todosRemaining =   state.todoList.filter((todo)=>{
        return todo.name.includes(searchText);
    })
    return todosRemaining;
};
export const searchTextSelector = (state) => state.filter.search;