import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        
    },
    reducers: {
        addToBasket(state, { payload }) {
            if(state[payload.id]) {
                state[payload.id] += payload.count;
            } else {
                state[payload.id] = payload.count;
            }
        }
    },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
