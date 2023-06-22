import {configureStore, createSlice, createAction} from '@reduxjs/toolkit';
import {reset} from '../actions'

const movieSlice = createSlice({
    name: 'movie',
    initialState: ['Gravity'],
    reducers: {
        addMovie(state,action){
           // console.log(action)
            state.push(action.payload)
         },
        removeMovie(state,action){
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

export {movieSlice}
