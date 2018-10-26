import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Notification from './Notification/Notification';
import Sidebar from './Sidebar/Sidebar';
import Tabs from './Tabs/Tabs';
import Accordion from './Accordion/Accordion';
import { IPProvider, IPConsumer } from './IPContext/IPContext';

// Css
import './App.css';

class App extends Component {
  state = {
    activeIndex: 0
  }

  changeIndex = (newIndex) => this.setState({
    activeIndex: newIndex
  });

  menuItems = [
    { title: 'Tabs' },
    { title: 'Accordion' },
    { title: 'My IP' },
    { title: 'Menu 4' },
  ]

  dataItems = [{
      title: 'Tab 1',
      content: <p><strong>Content 1</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
    {
      title: 'Tab 2',
      content: <p><strong>Content 2</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
    {
      title: 'Tab 3',
      content: <p><strong>Content 3</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
    {
      title: 'Tab 4',
      content: <p><strong>Content 4</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p >
    },
  ];

  render() {
      const { activeIndex } = this.state

      return (
        <IPProvider>

          <Header menuItems={this.menuItems} activeIndex={activeIndex} changeIndex={this.changeIndex} />
  
          <section className="container">
            <div className="columns">
              <div className="column is-3">
  
                <Sidebar menuItems={this.menuItems} activeIndex={activeIndex} changeIndex={this.changeIndex} />
  
              </div>
              <div className="column is-9">

                <Notification activeIndex={activeIndex} />
                
                { activeIndex === 0 && <Tabs tabsItems={this.dataItems} /> }
                { activeIndex === 1 && <Accordion accordionItems={this.dataItems} /> }
                { activeIndex === 2 && 
                  <IPConsumer>
											{(context) => (
                        <div className="field">
                            <div className="control">
                                <input className="input is-info" type="text" placeholder="Loading input" defaultValue={context.ip} />
                            </div>
                        </div>
											)}
									</IPConsumer>
                }
                  
              </div>
            </div>
          </section>
          
          <Footer />

        </IPProvider>
      );
  }
}

export default App;