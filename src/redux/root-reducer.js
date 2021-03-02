import { combineReducers } from 'redux';

import songReducer from './song/song.reducer'
import playerReducer from './player/player.reducer'
import playlistReducer from './playlist/playlist.reducer';

export default combineReducers({
    songs: songReducer,
    player: playerReducer,
    playlist: playlistReducer
})