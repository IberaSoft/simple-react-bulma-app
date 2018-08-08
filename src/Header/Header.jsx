import React, { Component } from 'react';
import logo from './../Assets/logo.svg';
//css
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <h1 className="header-title">Welcome to React</h1>
            </header>
        );
    }
}

export default Header