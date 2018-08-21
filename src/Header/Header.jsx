import React from 'react';
import logo from './../Assets/logo.svg';
import Navigation from './../Navigation/Navigation';
//css
import './Header.css';

const Header = (props) => (
    <header className="navbar is-white topNav">
        <div className="container">
            <div className="navbar-brand">
                <img src={logo} className="logo" width="150" height="150" alt="logo" />
            </div>
            <Navigation className="navbar-end" activeIndex={props.activeIndex} changeIndex={props.changeIndex} />
        </div>
    </header>
)

export default Header