import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {},
    reducers: {
        addToBasket(state, { payload }) {
            state[payload.id] = payload.count;
           
            return state;
        },
        deleteFromBasket(state, { payload }) {
            state[payload.id] = payload.count;
            
            return state;
        },
        deleteElFromBasket(state, {payload}) {
            delete state[payload.id];
            return state;
        }
    },
});

export const { addToBasket, deleteFromBasket, deleteElFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
