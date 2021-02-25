import React from 'react';

import './song-preview.styles.scss';

import Song from '../song/song.component'


const SongPreview = ({ title }) => (
    <div className="song-preview">
        <div className="details">
            <h4 className="title">{ title }</h4>
            <hr/>
        </div>
        <div>
            <Song />
        </div>
    </div>
)

export default SongPreview;