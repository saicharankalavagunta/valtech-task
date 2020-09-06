import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from '../Redux/reducers';
import { fetchData } from '../Redux/ActionCreators'

let composeEnhancers = compose;
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const configureStore = () => {
    return createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
};
const store = configureStore();
store.dispatch(fetchData());

export default store
