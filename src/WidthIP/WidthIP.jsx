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
        const { ip } = this.state;
        console.log('PATATA: ', this.props)
        return (
            <div className={`notification is-warning ${(this.state.isHidden === true ) ? 'is-hidden' : ''}`}>
                <button className="delete" onClick={() => this.handleClick(true)}></button>
                { ip ? <p>Your IP is: {this.props.children(ip)}</p> : <p>Loading ip...</p> }
            </div>
        )
    }

};

export default WidthIP;