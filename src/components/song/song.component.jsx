import React from 'react';

import './song.styles.scss'


const Song = ({ title, picture }) => {
     return (
    <div className="song">
        <div className="main-song">
           <img src={picture} alt=""/>
           <span className="title">{title}</span>
        </div>
    </div>
)}

export default Song;