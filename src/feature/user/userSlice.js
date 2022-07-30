import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    user: null,
    error: null,
}

const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => response.data.map((user) => user.id))
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.user = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.user = [];
        })
    }
});

const userReducer = userSlice.reducer;

export { userReducer, fetchUsers };