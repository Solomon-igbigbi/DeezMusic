import React from 'react'

import './song-directory.styles.scss'

import SongPreview from '../song-preview/song-preview.component'

const SongDirectory = () => (
    <div className="song-directory">
        <SongPreview title={'Released This Week'}/>
        <SongPreview title={'Featured Playlist'}/>
    </div>
)

export default SongDirectory;