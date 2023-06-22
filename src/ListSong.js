import {useDispatch, useSelector} from 'react-redux';
import {addSong} from './store';
import  {reset} from "./store"



function ListSong(){
    const dispatch = useDispatch()

    function resetAll(){
        dispatch(reset())
    }

const  SongPlayList = useSelector((state) => {
    console.log(state)
    
})

function handleaddSong(){
  //  console.log(addSong)

    //console.log('SOng Name')
    const action = addSong('New Song x')
  //  console.log(action)
    dispatch(action)

}


    return (
        <div>
            This is List of song
            <br></br>
            <button onClick = {handleaddSong}>Click to Add Music</button>
            <br></br>
            <button onClick = {SongPlayList}>Click to see</button>
            <br></br>
            <button onClick = {resetAll}>Click to reset</button>

        </div>
    )
} 

export default ListSong;