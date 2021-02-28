const INITIAL_STATE = {
    latestSongs: null,
    latestTracks: null
}


const songReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_SONGS':
            return {
                ...state,
                latestSongs: action.payload.tracks.data,
                latestTracks: action.payload.playlists.data
            }
        case 'GET_TRACKS':
            return {
                ...state,
                latestTracks: action.payload.playlists.data
            }
        default:
            return state;
    }
    
}

export default songReducer;