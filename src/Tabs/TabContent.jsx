import React, { Component } from 'react';

class TabContent extends Component {
    clickTab(index, event) {
        this.props.clickTab(index);
    }
    render() {
        let activeClass = this.props.activeId;
        let tabContent = this.props.tabData.map((item, index) => {
            return <div 
                        className={'tab-pane ' + (activeClass === index ? "is-active" : "")}
                        key={index}>
                            {item.text}
                    </div>
        });
        return (
            <div className="tab-content">{tabContent}</div>
        );
    }
}

export default TabContent;