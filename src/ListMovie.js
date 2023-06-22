import {useDispatch, useSelector} from 'react-redux';
import {addMovie} from './store';
import  {reset} from "./store"



function ListMovie(){
    const dispatch = useDispatch()

    function resetAll(){
        dispatch(reset())
    }

const  MovieList = useSelector((state) => {
    console.log(state)
    
})

function handleaddMovie(){
  //  console.log(addSong)

    //console.log('SOng Name')
    const action = addMovie('The man who knew infinity')
  //  console.log(action)
    dispatch(action)

}


    return (
        <div>
            This is List of song
            <br></br>
            <button onClick = {handleaddMovie}>Click to Add Movie</button>
            <br></br>
            <button onClick = {MovieList}>Click to see Movie</button>


        </div>
    )
} 

export default ListMovie;