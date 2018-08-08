import React, { Component } from 'react';
import Link from './../Link/Link';
//css
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className={this.props.className}>
                <ul>
                    <li><Link /></li>
                    <li><Link /></li>
                    <li><Link /></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;