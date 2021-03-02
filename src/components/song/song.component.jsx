import React from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../../redux/player/play.action';
import { getPlaylist } from '../../redux/playlist/playlist.action';
import { withRouter } from 'react-router-dom'

import './song.styles.scss'


const Song = ({ title, album, tracklist, picture, preview, getSongDetails, getPlaylistTracks, match, history }) => {
    const update  = (e) => {
        const details = new Array(e.target.parentElement.children) 
        
        // console.log(playlist)
        if(details[0][0].attributes.tracklists) {
            const playlist = details[0][0].attributes.tracklists.textContent
            fetch(`https://cors.bridged.cc/${playlist}`)
                .then(res => res.json())
                .then(data => getPlaylistTracks(data))
                console.log(match)
                history.push(`/playlists/${details[0][1].textContent}`)
        } else {
            const newdet = {
                img: details[0][0].currentSrc,
                title: details[0][1].textContent,
                preview: details[0][2].currentSrc,
                isPlaying: false
            }
            getSongDetails(newdet)
        } 
    }

    return (
        <div className="song" >
            <div className="main-song">
                <img onClick={update} tracklists={tracklist} src={picture ? picture : album.cover} alt=""/>
                <span className="title">{title}</span>
                <audio src={preview}></audio>
            </div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    getSongDetails: item => dispatch(updatePlayer(item)),
    getPlaylistTracks: item => dispatch(getPlaylist(item))
})

const mapStateToProps = state => ({
    player: state.player
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Song));