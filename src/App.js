import React, { Component } from 'react';
import './App.css';
import Navbar from './NavbarComponent/Navbar';

class App extends Component {
  render() {
    return (
      <Navbar isLoggedInFb="true"/>
    );
  }
}

export default App;
