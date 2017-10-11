import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Header extends Component {

    render(){

        return(
            <div className='header'>
                <div className='header__logo'>
                    LOGO
                </div>
                <nav className='nav'>
                    <div className='nav__item'>
                        <Link to='/'>Stories</Link>
                    </div>
                    <div className='nav__item'>
                        <Link to='/stats'>Stats</Link>
                    </div>
                    <div className='nav__item'>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className='nav__item'>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
