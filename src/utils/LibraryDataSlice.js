import { createSlice } from "@reduxjs/toolkit";
import BookData from "./BookData.js";

const LibrarySlice = createSlice({
    name:"Library",
    initialState:{
        data:BookData,
    },
    reducers:{
        addItem: (state, action) => {
      const { category, book } = action.payload; 
      if (state.data[category]) {
        state.data[category].unshift(book); 
      } else {
        console.warn(`Category "${category}" not found in library`);
      }
    },
    }
})


export default LibrarySlice.reducer;
export const {addItem} = LibrarySlice.actions;