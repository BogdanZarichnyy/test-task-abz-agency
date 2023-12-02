import { createAsyncThunk } from "@reduxjs/toolkit";

export const url = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/positions');

export const getPositionsThunk = createAsyncThunk("/", async (_, thunkAPI) => {
    try {
        const response = await fetch(`${url}`).then(response => response.json());
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});