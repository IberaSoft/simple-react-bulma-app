import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import { IPProvider } from './IPContext/IPContext';
import { MenuProvider } from './MenuContext/MenuContext';
import { menuItems, dataItems } from './data';
// Css
import './App.css';

const App = () => (
  <MenuProvider>
    <IPProvider>

      <Header menuItems={menuItems} />

      <MainContent menuItems={menuItems} dataItems={dataItems} />
      
      <Footer />

    </IPProvider>
  </MenuProvider>
)

export default App;