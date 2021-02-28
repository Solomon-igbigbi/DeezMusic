import React from 'react'
import { connect } from 'react-redux'
import { updatePlayer } from '../../redux/player/play.action'


import './playbar.styles.scss'


const Playbar = ({ player }) => {
    const { img, title, preview, isPlaying, getSongDetails } = player 

    const playSong = (e) => {
            // audio.play() 
            console.log(e.target.parentElement.children)
    }

    const stopSong = (e) => {
        // console.log(e.target.parentElement.children)
        return 'https://this.audio'
    }

    return (
        <div className="playitem">
            <div className="playbar">
                <div className="music">
                    <img src={img} alt="" className="display"/>
                    <span className="title">{title}</span>
                </div>;
                <div className="player">
                    <i className="fas fa-step-backward"></i>
                    <i onClick={playSong} className="fas fa-play-circle"></i>
                    <i className="fas fa-step-forward"></i>
                    <audio src={ isPlaying ? stopSong : preview}></audio>
                </div>
                <hr/>
                <div className="functions">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-random"></i>
                    <i className="fas fa-retweet"></i>
                    <i className="fas fa-volume-off"></i>
                </div>
                
            </div>
        </div>
    
    )
}

const mapStateToProps = state => ({
    player: state.player
})

const mapDispatchToProps = dispatch => ({
    getSongDetails: item => dispatch(updatePlayer(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playbar)