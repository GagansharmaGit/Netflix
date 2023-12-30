import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducer from "./MoviesSlice"
import GptReducer from "./GptSearchSlice";
const AppStore = configureStore(
    {
        reducer:{
            user:UserReducer,
            movies:MoviesReducer,
            gpt:GptReducer,
        },
    }
);

export default AppStore;