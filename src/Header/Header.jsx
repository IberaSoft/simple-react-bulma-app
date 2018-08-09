import React from 'react';
import logo from './../Assets/logo.svg';
import Navigation from './../Navigation/Navigation';
//css
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <Navigation className="navigation-horizontal" />
        </header>
    );
}

export default Header