import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import gridReducer from '../features/Grid/reducer';

let rootReducers = combineReducers({
    grid: gridReducer
});

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;