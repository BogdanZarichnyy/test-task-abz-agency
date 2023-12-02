import { createAsyncThunk } from "@reduxjs/toolkit";
import { setNextUrlUsers } from "../slices/usersSlice";

// export const url = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6');
export const url = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/users');

export const getUsersThunk = createAsyncThunk("/", async (_, thunkAPI) => {
    try {
        url.searchParams.append('completed', false);
        url.searchParams.append('page', thunkAPI.getState().users.page);
        url.searchParams.append('count', thunkAPI.getState().users.count);
        const response = await fetch(`${url}`).then(response => response.json());
        console.log(response);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getMoreUsersThunk = createAsyncThunk("/", async (_, thunkAPI) => {
    try {
        url.searchParams.append('completed', false);
        url.searchParams.set('page', thunkAPI.getState().filter.page);
        // const response = await fetch(`${url}`).then(response => { return response.json() });
        // if (response.length === 0 || response.length < thunkAPI.getState().filter.limit) {
        //     thunkAPI.dispatch(setNextUrlUsers(false));
        // }
        // return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});