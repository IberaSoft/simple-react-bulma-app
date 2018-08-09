import React, { Component } from 'react';
//css
import './Link.css';

class Link extends Component {

    render() {
        return (
            <a href="#" className={`${this.props.disabled ? 'disabled' : ''}`} title={this.props.text}>{this.props.text}</a>
        );
    }
}

export default Link; 