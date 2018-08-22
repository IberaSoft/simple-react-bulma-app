
import React, { Component } from 'react';

class Tabs extends Component {
    state = {
        activeIndex: 0
    }

    headerClick = (index) => {
        if (index !== this.state.activeIndex) this.setState({ activeIndex: index })
    }

    headerClass = (index) => (this.state.activeIndex === index ) ? "is-active" : ""

    render() {
        const { tabsItems } = this.props
        const { activeIndex } = this.state
      
        return (
            <div>
                <div className="tabs">
                    <ul>
                    { 
                        tabsItems.map((tab, index) =>
                            <li key={tab.title + index}
                                onClick={() => this.headerClick(index)}
                                className={this.headerClass(index)}>
                                <a>{tab.title}</a>
                            </li>
                        )
                    }
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane is-active">
                        {tabsItems[activeIndex].content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;