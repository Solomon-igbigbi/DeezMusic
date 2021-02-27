const INITIAL_STATE = {
    latestSongs: null,
    latestTracks: null
}


const songReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case 'GET_SONGS':
            return {
                ...state,
                latestSongs: action.payload
            }
        case 'GET_TRACKS':
            return {
                ...state,
                latestTracks: action.payload
            }
        default:
            return state;
    }
    
}

export default songReducer;