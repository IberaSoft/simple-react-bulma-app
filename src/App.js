import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import Tabs from './Tabs/Tabs';

// Css
import './App.css';

let data = [
  {
      name: 'Tab 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  {
      name: 'Tab 2',
      text: 'Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  },
  {
      name: 'Tab 3',
      text: 'laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  }
];

class App extends Component {

  constructor(props) {
      super(props)

      this.state = {
          activeTab: 0,
          activeIndex: 0,
          data: data
      }
      
      this.tabClick = this.tabClick.bind(this);
      this.menuClick = this.changeIndex.bind(this);
  }
  
  tabClick(index){
      this.setState({
          activeTab:index
      });
  }

  changeIndex(newIndex) {
    this.setState({
      activeIndex: newIndex
    })
  }

  render() {
    return (
      <div>
        <Header activeIndex={this.state.activeIndex} changeIndex={this.menuClick} />

        <section className="container">
          <div className="columns">
            <div className="column is-3">

              <Sidebar activeIndex={this.state.activeIndex} changeIndex={this.menuClick} />

            </div>
            <div className="column is-9">

              <Main activeIndex={this.state.activeIndex} activeTab={this.state.activeTab} />

              <Tabs tabData={this.state.data} activeId={this.state.activeTab} clickTab ={this.tabClick} />
                
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default App;