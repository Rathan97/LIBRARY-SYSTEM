import {configureStore} from "@reduxjs/toolkit";
import LibraryReducer from "./LibraryDataSlice.js"


const appStore = configureStore((
    {
        reducer:{
            Library:LibraryReducer,

        },
    }
));


export default appStore;