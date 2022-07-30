import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
    numberOficecreams: 10
};

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOficecreams--;
        },
        reStocked: (state, action) => {
            state.numberOficecreams += action.payload;
        },
    },
    // if we want to give an extra icecream when the customer buys a cake
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numberOficecreams--;
        });
    },
    // Alternative Syntax
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOficecreams--;
    //     },
    // },
});

const icecreamReducer = icecreamSlice.reducer;
const icecreamActions = icecreamSlice.actions;

export { icecreamReducer, icecreamActions };