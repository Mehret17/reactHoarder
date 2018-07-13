import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

import AllStuff from '../components/AllStuff/AllStuff';
import FullStuff from '../components/FullStuff/FullStuff';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/MyStuff';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';

import Navbar from '../components/Navbar/Navbar';
import fbConnection from '../firebaseRequests/connection';
fbConnection();


const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/allstuff', state: { from: props.location } }}
            />
          )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
    }
  });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }

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
            <Navbar 
            authed={this.state.authed}
            runAway={this.runAway}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <PrivateRoute
                    path="/allStuff"
                    authed={this.state.authed}
                    component={AllStuff}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                    <PublicRoute
                    path="/login"
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PrivateRoute
                    path="/mystuff"
                    authed={this.state.authed}
                    component={MyStuff}
                  />
                    <PrivateRoute
                    path="/fullstuff/:id"
                    authed={this.state.authed}
                    component={FullStuff}
                  />
                                    
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
