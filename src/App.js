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
      <div>
        <Header activeIndex={this.state.activeIndex} changeIndex={this.changeIndex.bind(this)} />

        <section className="container">
          <div className="columns">
            <div className="column is-3">

              <Sidebar activeIndex={this.state.activeIndex} changeIndex={this.changeIndex.bind(this)} />

            </div>
            <div className="column is-9">

              <Main activeIndex={this.state.activeIndex} />

            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default App;
