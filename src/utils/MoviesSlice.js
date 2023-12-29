import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null,
            popularMovies:null,
            upcomingMovies:null

        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies = action.payload;
            },
            addUpcommingMovies:(state,action)=>{
                state.upcomingMovies = action.payload;
            },
            addTrailerVideo:(state,action)=>{
                 state.trailerVideo = action.payload;
            }
        }
    }
);
export const {addNowPlayingMovies,addTrailerVideo , addPopularMovies , addUpcommingMovies} = MoviesSlice.actions;
export default MoviesSlice.reducer;