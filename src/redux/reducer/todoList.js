const initState = [
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
        id: 6,
        name: "sleep",
        complete: false,
        priority: "Medium"
    }
]
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [
                ...state,
                action.payload
            ]
        case "todoList/toggleTodoStatus":
            return  state.map(todo=> todo.id === action.payload ? {...todo,complete:!todo.complete}:todo)
        default:
            return state;
    }
}
export default todoListReducer;
// https://www.youtube.com/watch?v=g_K1w8e0lLo
//  dang xem 44:12