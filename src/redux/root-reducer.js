import { combineReducers } from 'redux';

import songReducer from './song/song.reducer'

export default combineReducers({
    songs: songReducer
})