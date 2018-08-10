import React from 'react';
import Link from './../Link/Link';
//css
import './Navigation.css';

const Navigation = (props) => (
    <nav className={props.className}>
        <Link isActive={props.activeIndex === 0} onClick={()=>props.changeIndex(0)}>Text 0</Link>
        <Link isActive={props.activeIndex === 1} onClick={()=>props.changeIndex(1)}>Text 1</Link>
        <Link isActive={props.activeIndex === 2} onClick={()=>props.changeIndex(2)}>Text 2</Link>
    </nav>
)

export default Navigation;