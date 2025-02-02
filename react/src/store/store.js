import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './features/employees/employeesSlice';
import localStorageMiddleware from "./middleware/localStorageMiddleware";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('employees');
        if (serializedState === null) {
            return undefined;
        }
        const state = JSON.parse(serializedState);
        return state;
    } catch {
        return undefined;
    }
}

const preloadedState = {
    employees: loadState() || [],
};

const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    preloadedState,
});

export default store;