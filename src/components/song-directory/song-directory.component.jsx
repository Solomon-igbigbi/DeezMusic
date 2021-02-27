import React from 'react';


import './song-directory.styles.scss'

import SongPreview from '../song-preview/song-preview.component'

const SongDirectory = () => {
    return (
        <div className="song-directory">
           <SongPreview header={'Released This Week'}/>
        </div>
    )
}


export default SongDirectory