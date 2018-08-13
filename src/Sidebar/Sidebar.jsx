import React from 'react';
import Navigation from './../Navigation/Navigation';

const Sidebar = (props) => (
    <aside className="menu">
        <p className="menu-label">Sidebar</p>
        <Navigation activeIndex={props.activeIndex} changeIndex={props.changeIndex} />
    </aside>
)

export default Sidebar;