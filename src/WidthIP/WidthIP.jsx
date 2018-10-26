import React, { Component } from 'react';

class WidthIP extends Component {

    constructor(props){
        super(props);
        this.state = {
            ip: null,
            isHidden: false
        };
    }

    handleClick = (value) => {
        this.setState({ isHidden: value })
    }

    componentDidMount() {
        const url = 'https://api.ipify.org?format=json';

        fetch(url)
            .then(
                response => response.json()
            )
            .then(
                data => this.setState(data)
            );
    }

    render() {
        const { ip, isHidden } = this.state;
        return (
            <div className={`notification is-warning ${(isHidden === true ) ? 'is-hidden' : ''}`}>
                <button className="delete" onClick={() => this.handleClick(true)}></button>
                { ip ? <span>Your IP is: {this.props.children(ip)}</span> : <span>Loading ip...</span> }
            </div>
        )
    }

};

export default WidthIP;