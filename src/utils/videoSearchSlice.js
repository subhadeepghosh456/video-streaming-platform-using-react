import { createSlice } from "@reduxjs/toolkit";


const videoSearchSlice = createSlice({
    name:"videoSearch",
    initialState:[],
    reducers:{
        searchVideos:(state,actions)=>{

        },
    },
});

export const {searchVideos} = videoSearchSlice.actions;
export default videoSearchSlice.reducer;