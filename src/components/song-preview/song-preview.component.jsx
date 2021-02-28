import React from 'react';
import { connect } from 'react-redux';

import './song-preview.styles.scss';

import Song from '../song/song.component'


const SongPreview = ({ songs, tracks }) => { 

    const updateState = (e) => {
        console.log(e.target)
    }

    return (
    <div className="song-preview">
        <div className="details">
            <h4 className="title">Realeased This Week</h4>
            <hr/>
        </div>
        <div className='songs'>
            {
                songs ? songs.map(song => (
                    <Song onClick={updateState} id={song.id} {...song} />
                )) : 'Loading'
            }
        </div>
        <div className="details">
            <h4 className="title">Favorites</h4>
            <hr/>
        </div>
        <div className='songs'>
            {
                tracks ? tracks.map(track => (
                    <Song id={track.id} picture={track.picture} {...track} />
                )) : 'Loading'
            }
        </div>
        <div className="details">
            <h4 className="title">Browse</h4>
            <hr/>
        </div>
        <div className='songs'>
            {
                tracks ? tracks.map(track => (
                    <Song id={track.id} picture={track.picture} {...track} />
                )) : 'Loading'
            }
        </div>
    </div>
)}

const mapStateToProps = state => ({
    songs: state.songs.latestSongs,
    tracks: state.songs.latestTracks
})


export default connect(mapStateToProps)(SongPreview);