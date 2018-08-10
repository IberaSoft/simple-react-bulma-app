import React from 'react';
//css
import './Link.css';

const Link = (props) => {
    let className = "Link";
    if (props.isActive) className += " is-active";
    return (
        <span className={className} onClick={props.onClick}>{props.children}</span>
    )
}

export default Link;