import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";
import productsSlice from "./products/productsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import searchSlice from "./search/searchSlice";

const persistConfig = {
    key: 'products',
    storage
};

const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsSlice,
    search: searchSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer );

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);