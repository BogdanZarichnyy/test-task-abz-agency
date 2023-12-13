import { createAsyncThunk } from "@reduxjs/toolkit";

import { getToken } from '../../api/fetching';

const urlFetchRequestForGetUsers = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/users');

export const getUsersThunk = createAsyncThunk("users/getUsersThunk", async (_, thunkAPI) => {
    try {
        urlFetchRequestForGetUsers.searchParams.set('page', thunkAPI.getState().users.page);
        urlFetchRequestForGetUsers.searchParams.set('count', thunkAPI.getState().users.count);
        const response = await fetch(`${urlFetchRequestForGetUsers}`).then(response => response.json());
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const postUserThunk = createAsyncThunk("users/postUser", async ({ formData, setIsSuccessfullyRegistered }, thunkAPI) => {
    try {
        let userToken = localStorage.getItem("token");
        if (!userToken) {
            userToken = getToken();
        }
        const parsedUserToken = JSON.parse(userToken);

        urlFetchRequestForGetUsers.searchParams.delete('page');
        urlFetchRequestForGetUsers.searchParams.delete('count');

        const response = await fetch(`${urlFetchRequestForGetUsers}`,
            { 
                method: 'POST', 
                body: formData, 
                headers: { 
                    // 'Content-Type': 'multipart/form-data', 
                    'Token': parsedUserToken 
                } 
            })
            .then(response => {
                setIsSuccessfullyRegistered(true);
                return response.json()
            });

        if (response.success) {
            thunkAPI.dispatch(getUsersThunk());
        }
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    finally {
        setTimeout(() => setIsSuccessfullyRegistered(false), 2000);
    }
});