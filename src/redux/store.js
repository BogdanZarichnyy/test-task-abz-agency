import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducerUsers } from './slices/usersSlice';
import { reducerPositions } from './slices/positionsSlice';

const rootReducer = combineReducers({
    users: reducerUsers,
    positions: reducerPositions,
});

export const store = configureStore({
    reducer: rootReducer
});