import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__header__left'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>

                </div>
                <div className='home__header__right'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                    
                    {/* Avatart */}
                    {/* Icon */}
                </div>
            </div>
            <div className='home__body'></div>
        </div>
    )
}

export default Home;
