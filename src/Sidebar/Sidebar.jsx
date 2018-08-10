import React from 'react';
import Navigation from './../Navigation/Navigation';
//css
import './Sidebar.css';

const Sidebar = (props) => (
    <section className="sidebar">
        <Navigation className="navigation-vertical" activeIndex={props.activeIndex} changeIndex={props.changeIndex} />
    </section>
)

export default Sidebar;