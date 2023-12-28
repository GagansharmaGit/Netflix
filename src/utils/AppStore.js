import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducer from "./MoviesSlice"

const AppStore = configureStore(
    {
        reducer:{
            user:UserReducer,
            movies:MoviesReducer,
        },
    }
);

export default AppStore;