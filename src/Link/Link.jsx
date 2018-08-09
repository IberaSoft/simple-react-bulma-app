import React from 'react';
//css
import './Link.css';

const Link = (props) => {
    return (
        <a href="" className={`${props.disabled ? 'disabled' : ''}`} title={props.text}>{props.text}</a>
    );
}

export default Link; 