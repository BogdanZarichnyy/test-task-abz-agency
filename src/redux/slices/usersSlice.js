import { createSlice } from "@reduxjs/toolkit";

import { getUsersThunk } from "../thunks/usersThunk";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        nextUrl: '',
        page: 1,
        count: 6,
        isLoading: false
    },

    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getUsersThunk.fulfilled, (state, action) => {
                state.users = state.page === 1 ? action.payload.users : [...state.users, ...action.payload.users];
                state.nextUrl = action.payload.users.length === 0 ? '' : action.payload.links.next_url;
                state.isLoading = false;
            })
            .addCase(getUsersThunk.rejected, (state, action) => {
                state.isLoading = false;
            })
    },

});

export const { setPage } = usersSlice.actions;
export const reducerUsers = usersSlice.reducer;