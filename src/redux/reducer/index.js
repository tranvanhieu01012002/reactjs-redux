const initState = {
    filter: {
        search: "",
        status: "All",
        priority: []
    },
    todoList: [
        {
            id: 1,
            name: "learning",
            complete: false,
            priority: "High"
        },
        {
            id: 2,
            name: "eat",
            complete: true,
            priority: "High"
        },
        {
            id: 3,
            name: "code",
            complete: false,
            priority: "Low"
        },
        {
            id: 1,
            name: "sleep",
            complete: false,
            priority: "Medium"
        }
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case "filter/searchFilterChange":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }
        default:
            return state;
    }
}
export default rootReducer;
// https://www.youtube.com/watch?v=g_K1w8e0lLo
//  dang xem 44:12