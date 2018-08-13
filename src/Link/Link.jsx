import React from 'react';

const Link = (props) => {
    let className = "navbar-item";
    if (props.isActive) className += " is-active";
    return (
        <a className={className} onClick={props.onClick}>{props.children}</a>
    )
}

export default Link;