import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { dataReducer } from './reducers/data';

const rootReducer = combineReducers({
    dataState: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
