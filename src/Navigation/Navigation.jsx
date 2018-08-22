import React from 'react';
import Link from './../Link/Link';

const Navigation = (props) => (
    <nav className="navbar-menu">
        <div className={props.className}>
            {
                props.menuItems.map((menu, index) =>
                    <Link key={menu.title + index}
                        isActive={props.activeIndex === index}
                        onClick={() => props.changeIndex(index)}>
                        {menu.title}
                    </Link>
                )
            }
        </div>
    </nav>
)

export default Navigation;