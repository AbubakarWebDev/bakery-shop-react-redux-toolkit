import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nunmberOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.nunmberOfCakes--;
        },
        reStocked: (state, action) => {
            state.nunmberOfCakes += action.payload;
        },
    }
});

const cakeReducer = cakeSlice.reducer;
const cakeActions = cakeSlice.actions;

export { cakeReducer, cakeActions };