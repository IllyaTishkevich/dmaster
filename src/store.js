import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { dataReducer } from './reducers/data';
import { localStorageMiddleware } from './middleware/localStorage';

const rootReducer = combineReducers({
    dataState: dataReducer,
});

// Загружаем начальное состояние из localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('dmaster-data');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, localStorageMiddleware)
);

export default store;
