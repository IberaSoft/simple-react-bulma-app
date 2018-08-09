import React from 'react';
import Navigation from './../Navigation/Navigation';
//css
import './Sidebar.css';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Navigation className="navigation-vertical" />
        </section>
    );
}

export default Sidebar;