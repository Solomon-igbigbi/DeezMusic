import { combineReducers } from 'redux';

import songReducer from './song/song.reducer'
import playerReducer from './player/player.reducer'

export default combineReducers({
    songs: songReducer,
    player: playerReducer
})