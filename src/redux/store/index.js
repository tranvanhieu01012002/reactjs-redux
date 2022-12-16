import { createStore } from 'redux'
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer);

export default store;

//dang xem :1:4:45
// https://www.youtube.com/watch?v=g_K1w8e0lLo
