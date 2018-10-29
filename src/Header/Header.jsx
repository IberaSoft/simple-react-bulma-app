import React from 'react';
import logo from './../Assets/logo.svg';
import Menu from './../Menu/Menu';
//css
import './Header.css';

const Header = (props) => (
    <header className="navbar is-white topNav">
        <div className="container">
            <div className="navbar-brand">
                <img src={logo} className="logo" width="150" height="150" alt="logo" />
            </div>

            <Menu menuItems={props.menuItems} className="navbar-end" />
            
        </div>
    </header>
)

export default Header