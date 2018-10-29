import React, { Component } from 'react';
import Link from './../Link/Link';
import { MenuConsumer } from './../MenuContext/MenuContext';

class Menu extends Component {

    renderMenuItem = (menuContext) => {
        const props = this.props;
        const { selectedMenuItems } = menuContext;

        return (
            <nav className="navbar-menu">
                <div className={props.className}>
                    {
                        props.menuItems.map((menu, index) =>
                            <Link key={menu.title + index}
                                isActive={selectedMenuItems === index}
                                onClick={(e) => menuContext.onItemClick(index, e)}>
                                {menu.title}
                            </Link>
                        )
                    }
                </div>
            </nav>
        )
    }

    render () {
        
        return (
            <MenuConsumer>
                {(menuContext) => this.renderMenuItem(menuContext)}
            </MenuConsumer>
        )
    }
};

export default Menu;