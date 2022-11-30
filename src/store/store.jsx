import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";
import productsSlice from "./products/productsSlice";

export default configureStore({
    reducer: {
        basket: basketReducer,
        products: productsSlice
    }
});