import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header/header.component'
import Song from '../../components/song/song.component'
import Playbar from '../../components/playbar/playbar.component'

import './playlist-page.styles.scss'

const PlaylistPage = ({ playlist }) => {
    return (
        <div className="playlist">
            <Header />
            <div className="overflow">
                <div className="playlistTrack">
                    {
                        playlist ? playlist.map(list => (
                            <Song key={list.id} album={list.album} {...list}/>
                        )) : 'Loading'
                    }
                </div>
            </div>
            <Playbar />
        </div>
    )
}

const mapStateToProps = (state) => ({
    playlist: state.playlist.playlistTracks
})

export default connect(mapStateToProps)(PlaylistPage);