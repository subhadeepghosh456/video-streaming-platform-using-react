import { createSlice } from "@reduxjs/toolkit";

const searchApiSlice = createSlice({
  name: "searchApi",
  initialState: {
    isSearched: false,
    searchQuery: "",
  },
  reducers: {
    searchKeyWord: (state, action) => {
      state.searchQuery = action.payload;
      state.isSearched = true;
    },
  },
});

export const { searchKeyWord } = searchApiSlice.actions;
export default searchApiSlice.reducer;
