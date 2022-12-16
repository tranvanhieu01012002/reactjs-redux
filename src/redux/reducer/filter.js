
const initState = {
    search: "",
    status: "All",
    priority: []
}
const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case "filter/searchFilterChange":
            return {
                ...state,
                search: action.payload
            }
        case "filter/statusFilterChange":
            return {
                ...state,
                status: action.payload
            }
        case "filter/priorityFilterChange":
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }
}
export default filterReducer;
// https://www.youtube.com/watch?v=g_K1w8e0lLo
//  dang xem 44:12