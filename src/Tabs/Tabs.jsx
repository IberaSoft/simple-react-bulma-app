
import React, { Component } from 'react';
import TabContent from './TabContent';
//css
import './Tabs.css';

class Tabs extends Component {
    clickTab(index, event) {
        this.props.clickTab(index);
    }

    render() {
        let activeClass = this.props.activeId;
        let tabsMenu = this.props.tabData.map((item, index) => {
            return (<li 
                onClick={this.clickTab.bind(this, index)}
                className={activeClass === index ? "is-active" : ""}
                key={index}>
                    <a>{item.name}</a>
                </li>)
        });
      
        return (
            <div>
                <div className="tabs">
                    <ul>{tabsMenu}</ul>
                </div>
                <TabContent tabData={this.props.tabData} activeId={this.props.activeId} />
            </div>
        );
    }
}

export default Tabs;