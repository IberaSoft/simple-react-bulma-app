import React, { Component } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// Css
import './App.css';
class App extends Component {
  state = {
    activeIndex: 0
  }

  changeIndex(newIndex) {
    this.setState({
      activeIndex: newIndex
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header activeIndex={this.state.activeIndex} changeIndex={this.changeIndex.bind(this)} />
        <Sidebar activeIndex={this.state.activeIndex} changeIndex={this.changeIndex.bind(this)} />
        <Main activeIndex={this.state.activeIndex} />
        <Footer />
      </div>
    );
  }
}

export default App;
