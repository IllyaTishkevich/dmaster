export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const stateToSave = store.getState();
    localStorage.setItem('dmaster-data', JSON.stringify(stateToSave));
    return result;
}; 