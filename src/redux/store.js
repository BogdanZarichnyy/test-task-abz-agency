import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducerUsers } from './slices/usersSlice';

const rootReducer = combineReducers({
    users: reducerUsers,
});

export const store = configureStore({
    reducer: rootReducer
});