import { createSlice } from "@reduxjs/toolkit";

import { getPositionsThunk } from "../thunks/positionsThunk";

const positionsSlice = createSlice({
    name: "positionsSlice",
    initialState: {
        positions: []
        // isLoading: false,
        // error: null,
    },
    // reducers: {

    //     getPositionst: {
    //         reducer( state, action) {
    //             state.positions = action.payload;
    //         },
    //         prepare(positions) {
    //             return {
    //                 payload: positions,
    //             }
    //         }
    //     }

    // },

    extraReducers: (builder) => {

        builder.addCase(getPositionsThunk.fulfilled, (state, action) => {
            // state.positions.push(action.payload.positions);
            // console.log(action.payload.positions);
            state.positions = action.payload.positions;
        })
            
        // [getPositionsThunk.pending](state) {
        //     state.isLoading = true;
        // },
        // [getPositionsThunk.fulfilled](state, action) {
        //     state.positions = action.payload
        //     state.isLoading = false;
        //     state.error = null;
        // },
        // [getPositionsThunk.rejected](state, action) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    }

});

// export const { getPositionst } = positionsSlice.actions;
export const reducerPositions = positionsSlice.reducer;