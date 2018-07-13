import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

// import AllStuff from '../components/AllStuff/AllStuff';
// import FullStuff from '../components/FullStuff/FullStuff';
// import Login from '../components/Login/Login';
// import MyStuff from '../components/MyStuff/MyStuff';
// import Register from '../components/Register/Register';
import Home from '../components/Home/Home';

import Navbar from '../components/Navbar/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AllStuff />
        <FullStuff />
        <Login />
        <MyStuff/>
        <Register /> */}
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
