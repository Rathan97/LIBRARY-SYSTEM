import { createSlice } from "@reduxjs/toolkit";
import BookData from "./BookData.js";

const LibrarySlice = createSlice({
    name: "Library",
    initialState: {
        data: BookData, // Initial book data categorized
    },
    reducers: {
        // Add a new book to a specific category
        addItem: (state, action) => {
            const { category, book } = action.payload;

            // If category exists, add book at the beginning
            if (state.data[category]) {
                state.data[category].unshift(book); 
            } else {
                // Warn if category does not exist
                console.warn(`Category "${category}" not found in library`);
            }
        },
    }
})

export default LibrarySlice.reducer;
export const { addItem } = LibrarySlice.actions;
