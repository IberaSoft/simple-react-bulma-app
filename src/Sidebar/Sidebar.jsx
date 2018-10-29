import React from 'react';
import Menu from './../Menu/Menu';

const Sidebar = (props) => (
    <aside className="menu">
        <p className="menu-label">Sidebar</p>

        <Menu menuItems={props.menuItems} />
    </aside>
)

export default Sidebar;