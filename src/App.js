import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import Tabs from './Tabs/Tabs';

// Css
import './App.css';

class App extends Component {
  state = {
    activeIndex: 0
  }

  changeIndex = (newIndex) => this.setState({ activeIndex: newIndex })

  tabsItems = [
    {title: 'Tab 1', content: <p> <strong>Content 1</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},  
    {title: 'Tab 2', content: <p> <strong>Content 2</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},  
    {title: 'Tab 3', content: <p> <strong>Content 3</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},  
    {title: 'Tab 4', content: <p> <strong>Content 4</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni magnam exercitationem laborum temporibus neque officia fugit, perferendis voluptatum, impedit repudiandae obcaecati animi ipsam. Eos culpa iure minima eum ad.</p>},

]


  render() {
    return (
      <div>
        <Header activeIndex={this.state.activeIndex} changeIndex={this.changeIndex} />

        <section className="container">
          <div className="columns">
            <div className="column is-3">

              <Sidebar activeIndex={this.state.activeIndex} changeIndex={this.changeIndex} />

            </div>
            <div className="column is-9">

              <Main activeIndex={this.state.activeIndex} />

              <Tabs tabsItems={this.tabsItems} />
                
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default App;