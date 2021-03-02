import React from 'react';

import { ReactComponent as ProfilePic } from '../../assets/profile-pic.svg'


import './sidebar.styles.scss';


const Sidebar = () => (
    <div className="nav">
        <div className="profile-details">
            <ProfilePic  className='profile-picture' />
            <span className='profile-name'>Solomon Lane</span>
        </div>
        <ul className="nav-links">
            <li className="nav-item active"><i className="fas fa-headphones"></i>
                <span>Discover</span> 
            </li>
            <li className="nav-item"><i className="fas fa-search"></i>
                <span>Search</span> 
            </li>
            <li className="nav-item"><i className="fas fa-heart"></i>
                <span>Favorites</span> 
            </li>
            <li className="nav-item"><i className="fas fa-stream"></i>
                <span>Playlist</span> 
            </li>
            <li className="nav-item"><i className="fas fa-calendar-week"></i>
                <span>Charts</span> 
            </li>
        </ul>
    </div>
)

export default Sidebar;