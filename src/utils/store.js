import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSearchSlice from "./videoSearchSlice";
import searchApiSlice from "./searchApiSlice";
import chatSlice from "./chatSlice";



const store = configureStore({
reducer:{
    app: appSlice,
    search: searchSlice,
    video:videoSearchSlice,
    searchApi:searchApiSlice,
    chat:chatSlice 
    
}
});

export default store;