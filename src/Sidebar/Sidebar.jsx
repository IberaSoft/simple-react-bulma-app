import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation';
//css
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <section className="aside">
                <Navigation className="navigation-vertical" />
            </section>
        );
    }
}

export default Sidebar;