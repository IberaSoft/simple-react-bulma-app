import React from 'react';
import Link from './../Link/Link';
//css
import './Navigation.css';

const Navigation = (props) => {
    return (
        <nav className={props.className}>
            <ul>
                <li><Link text="Text 1" /></li>
                <li><Link text="Text 2" disabled /></li>
                <li><Link text="Text 3" /></li>
            </ul>
        </nav>
    );
}

export default Navigation;