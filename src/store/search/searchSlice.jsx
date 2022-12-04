import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: '',
    reducers: {
        setSearch(state, payload) {
            state = payload;

            return state;
        },
    },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
