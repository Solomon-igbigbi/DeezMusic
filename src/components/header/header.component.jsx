import React from 'react'
import { ReactComponent as Hero } from '../../assets/hero.svg'

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <Hero className='hero' />
        <div className="toggle">
            <h2>Your favourite tunes</h2>
            <span>All <i className="fas fa-sun"></i> and all <i className="fas fa-moon"></i></span>
        </div>
    </div>
);

export default Header;

