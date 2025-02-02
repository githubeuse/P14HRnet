const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    console.log('saving state to localSTorage', state.employees)
    localStorage.setItem('employees', JSON.stringify(state.employees));
    return result;
}

export default localStorageMiddleware;