import React from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../../redux/player/play.action';

import './song.styles.scss'


const Song = ({ title, album, picture, preview, getSongDetails, player }) => {
    const update  = (e) => {
        const audio = new Audio(player.preview)
        audio.pause()
        const details = new Array(e.target.parentElement.children) 
        const newdet = {
            img: details[0][0].currentSrc,
            title: details[0][1].textContent,
            preview: details[0][2].currentSrc,
            // isPlaying: false
        }
        getSongDetails(newdet)
        // console.log(newdet)
    }

    return (
        <div className="song" >
            <div className="main-song">
                <img onClick={update} src={picture ? picture : album.cover} alt=""/>
                <span className="title">{title}</span>
                <audio src={preview}></audio>
            </div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    getSongDetails: item => dispatch(updatePlayer(item))
})

const mapStateToProps = state => ({
    player: state.player
})

export default connect(mapStateToProps, mapDispatchToProps)(Song);