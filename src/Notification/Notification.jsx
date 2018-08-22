import React, { Component } from 'react';

class Notification extends Component {
    state = {
        isHidden: false
    }

    handleClick = (value) => {
        this.setState({ isHidden: value })
    }

    render() {
        const { activeIndex } = this.props

        return (
            <div className={`notification is-info ${(this.state.isHidden === true ) ? 'is-hidden' : ''}`}>
                <button className="delete" onClick={() => this.handleClick(true)}></button>
                <p>The active index is: {activeIndex}</p>
            </div>
        )
    }
}

export default Notification;