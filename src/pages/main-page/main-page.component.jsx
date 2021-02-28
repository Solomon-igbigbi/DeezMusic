import React from 'react';

import Sidebar from '../../components/sidebar/sidebar.component'
import Header from '../../components/header/header.component'
import SongDirectory from '../../components/song-directory/song-directory.component'
import Playbar from '../../components/playbar/playbar.component'


import './main-page.styles.scss';


const MainPage = () => (
    <div className='main-page'>
        <Sidebar /> 
        <div className="display">
            <Header />
            <SongDirectory />
            <Playbar />
        </div>
    </div>
);

export default MainPage;