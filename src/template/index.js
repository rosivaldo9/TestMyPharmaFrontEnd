import React, { Component } from 'react';
import NavBar from './navBar';
import SideBar from './SideBar';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <SideBar />
      </div>
    );
  }
}

export default App;
