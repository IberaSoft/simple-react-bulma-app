import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation';
//css
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <section className="sidebar">
                <Navigation className="navigation-vertical" />
            </section>
        );
    }
}

export default Sidebar;