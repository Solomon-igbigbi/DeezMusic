const INITIAL_STATE = {
    playlistTracks: null
}

const playlistReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_PLAYLIST_SONGS':
            return {
                ...state,
                playlistTracks: action.payload.data
            }
        default:
            return state
    }
}

export default playlistReducer;