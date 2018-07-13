import React, { Component } from 'react';

import AllStuff from '../components/AllStuff/AllStuff';
import FullStuff from '../components/FullStuff/FullStuff';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/MyStuff';
import Register from '../components/Register/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllStuff />
        <FullStuff />
        <Login />
        <MyStuff/>
        <Register />
      </div>
    );
  }
}

export default App;
