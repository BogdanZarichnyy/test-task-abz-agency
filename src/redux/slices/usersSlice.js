import { createSlice, current  } from "@reduxjs/toolkit";

// import { getUsersThunk, addUsersThunk, updateUserThunk } from "../thunks/usersThunk";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: {
            users: [],
            nextUrl: '',
            page: 1,
            count: 6
        },
    },
    reducers: {

        getUserFirst: {
            reducer( state, action) {
                state.users = action.payload;
            },
            prepare(users) {
                return {
                    payload: users,
                }
            }
        },

        getMoreUser: {
            reducer( state, action) {
                state.users.users = [...current(state.users.users), ...action.payload];
            },
            prepare(users) {
                return {
                    payload: users,
                }
            }
        },

        setNextUrlUsers: {
            reducer( state, action) {
                state.users.nextUrl = action.payload;
            },
            prepare(nextUrl) {
                return {
                    payload: nextUrl,
                }
            }
        }

    }
});

export const { getUserFirst, getMoreUser, setNextUrlUsers } = usersSlice.actions;
export const reducerUsers = usersSlice.reducer;