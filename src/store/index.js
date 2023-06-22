import {configureStore, createSlice, createAction} from '@reduxjs/toolkit';

import { songSlice } from './slice/songSlice';
import { movieSlice } from './slice/movieSlice';

import { reset } from "./actions";



const store = configureStore({
    reducer: { 
        songsABCD: songSlice.reducer,
        movie:movieSlice.reducer
    }
})


const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch ({
    type: 'song/addSong',
    payload: 'Coldplay'
})

//console.log(store.getState());

//console.log(songSlice.actions.addSong())

export {store,reset}
export const {addSong,removeSong} = songSlice.actions
export const {addMovie,removeMovie} = movieSlice.actions
