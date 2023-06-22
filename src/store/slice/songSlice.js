import {configureStore, createSlice, createAction} from '@reduxjs/toolkit';
import {reset} from '../actions'

const songSlice = createSlice({
    name: 'song',
    initialState: ['banjo'],
    reducers: {
        addSong(state,action){
           // console.log(action)
            state.push(action.payload)
         },
        removeSong(state,action){
            //
        }
    },
    extraReducers(builder){
        builder.addCase(reset,(state,action) =>{
            console.log(action)
            return [];
        });
    }

});

export {songSlice}
