import React, { Component } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// Css
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
