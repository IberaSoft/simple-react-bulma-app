import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Notification from './Notification/Notification';
import Sidebar from './Sidebar/Sidebar';
import Tabs from './Tabs/Tabs';

// Css
import './App.css';

class App extends Component {
  state = {
    activeIndex: 0
  }

  changeIndex = (newIndex) => this.setState({ activeIndex: newIndex });

  menuItems = [
    {title: 'Tabs Demo'},
    {title: 'Acco Demo'},
    {title: 'Menu 3'},
    {title: 'Menu 4'},
  ]

  tabsItems = [
    {title: 'Tab 1', content: <p> <strong>Content 1</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},  
    {title: 'Tab 2', content: <p> <strong>Content 2</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},  
    {title: 'Tab 3', content: <p> <strong>Content 3</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},  
    {title: 'Tab 4', content: <p> <strong>Content 4</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},
  ];

  getComponent(index) {
    switch (index) {
      case 0:
        return <Tabs tabsItems={this.tabsItems} />
      case 1:
        return
      default:
        return <Tabs tabsItems={this.tabsItems} />
    }
  }

  render() {
    return (
      <div>
        <Header menuItems={this.menuItems} activeIndex={this.state.activeIndex} changeIndex={this.changeIndex} />

        <section className="container">
          <div className="columns">
            <div className="column is-3">

              <Sidebar menuItems={this.menuItems} activeIndex={this.state.activeIndex} changeIndex={this.changeIndex} />

            </div>
            <div className="column is-9">
              <Notification activeIndex={this.state.activeIndex} />

              { this.getComponent(this.state.activeIndex) }
                
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default App;