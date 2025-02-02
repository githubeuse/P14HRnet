import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
        clearEmployees: () => {
            return [];
        }
    },
});

export const { addEmployee, clearEmployees} = employeesSlice.actions;
export default employeesSlice.reducer;