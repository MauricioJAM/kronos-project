

export const addSong =(song) =>{
    return {
        type: "ADD_SONG",
        payload : song
    }
}
export const removeSong = (id) => {
    return {
        type:"REMOVE_SONG",
        payload: id,
    }
}