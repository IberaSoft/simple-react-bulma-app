import React, { Component } from 'react';
import Link from './../Link/Link';
//css
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className={this.props.className}>
                <ul>
                    <li><Link text="Text 1" /></li>
                    <li><Link text="Text 2" disabled /></li>
                    <li><Link text="Text 3" /></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;