import { configureStore } from "@reduxjs/toolkit";
import LibraryReducer from "./LibraryDataSlice.js";

// Configure the Redux store
const appStore = configureStore({
    reducer: {
        Library: LibraryReducer, // Add Library slice reducer
    },
});

export default appStore;
