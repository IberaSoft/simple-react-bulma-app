import React from 'react';

const Link = (props) => {
    const className = (props.isActive) ? 'is-active' : ''; 
    
    return (
        <a className={`navbar-item ${className}`} onClick={props.onClick}>{props.children}</a>
    )
}

export default Link;