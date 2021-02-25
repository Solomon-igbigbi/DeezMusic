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
                Discover
            </li>
            <li className="nav-item"><i className="fas fa-search"></i>
                Search
            </li>
            <li className="nav-item"><i className="fas fa-heart"></i>
                Favorites
            </li>
            <li className="nav-item"><i className="fas fa-stream"></i>
                Playlist
            </li>
            <li className="nav-item"><i className="fas fa-calendar-week"></i>
                Charts
                </li>
        </ul>
    </div>
)

export default Sidebar;