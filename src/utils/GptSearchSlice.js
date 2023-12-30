import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice(
    {
        name:"gpt",
        initialState:{
            showGptSearch:false,
            movieResults:null,
            moviesNames:null,
        },
        reducers:{
            toggleGptSearchView:(state)=>{
                state.showGptSearch = !state.showGptSearch;
            },
            addGptMoviesResult:(state,action)=>{
                const {moviesNames , movieResults} = action.payload;
                state.moviesNames = moviesNames;
                state.movieResults = movieResults;
            },
        }
    }
    
);
export const {toggleGptSearchView , addGptMoviesResult} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;