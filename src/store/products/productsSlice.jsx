import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk(
    'products/getProducts',
    async (thunkAPI) => {
        const response = await fetch("./4p22-final-project-irina-ugrak/data.json");
        const result = await response.json();
        return result;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: [],
        loading: false
    },
    
    extraReducers: {
        [getProducts.pending]: (state) => {
            console.log("getProducts pending");
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            console.log("getProducts done");
            state.loading = false;
            state.entities = payload;
        },
        [getProducts.rejected]: (state) => {
            state.loading = false
        }
    },
});

export default productsSlice.reducer;
export { getProducts };
