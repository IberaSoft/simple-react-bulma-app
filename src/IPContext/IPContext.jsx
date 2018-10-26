import React, { Component } from 'react';

const IPContext = React.createContext();

class IPProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
            ip: "Loading..."
        };
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

        return (
            <IPContext.Provider value={{ip: ip}}>
                {this.props.children}
            </IPContext.Provider>
        )
    }
}

export const IPConsumer = IPContext.Consumer;

export { IPProvider };