import React from 'react'
import { connect } from 'react-redux'
import { updatePlayer } from '../../redux/player/play.action'


import './playbar.styles.scss'


const Playbar = ({ player, getSongDetails  }) => {
    const { img, title, preview, isPlaying } = player 
    
    const playSong = (e) => {
        const details = e.target.parentElement.children;
        const audio = details[3];
        if(isPlaying === false) {            
            audio.play();
            getSongDetails({ 
                img: img,
                title: title,
                isPlaying: true
            })

        } else {
            console.log(audio)
            audio.pause()
            getSongDetails({ 
                img: img,
                title: title,
                preview: audio.CurrentSrc,
                isPlaying: false
            })

        }
           
    }
    return (
        <div className="playitem">
            <div className="playbar">
                <div className="music">
                    <img src={img} alt="" className="display"/>
                    <span className="title">{title}</span>
                </div>
                <div className="player">
                    <i className="fas fa-step-backward"></i>
                    <i onClick={playSong} className={ isPlaying ? "fas fa-pause-circle" : "fas fa-play-circle"}></i>
                    <i className="fas fa-step-forward"></i>
                    <audio src={preview}></audio>
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