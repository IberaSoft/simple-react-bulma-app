import React from 'react';
import Link from './../Link/Link';

const Navigation = (props) => (
    <nav className="navbar-menu">
        <div className={props.className}>
            <Link isActive={props.activeIndex === 0} onClick={()=>props.changeIndex(0)}>Item 0</Link>
            <Link isActive={props.activeIndex === 1} onClick={()=>props.changeIndex(1)}>Item 1</Link>
            <Link isActive={props.activeIndex === 2} onClick={()=>props.changeIndex(2)}>Item 2</Link>
            <Link isActive={props.activeIndex === 3} onClick={()=>props.changeIndex(3)}>Item 3</Link>
            <Link isActive={props.activeIndex === 4} onClick={()=>props.changeIndex(4)}>Item 4</Link>
        </div>
    </nav>
)

export default Navigation;