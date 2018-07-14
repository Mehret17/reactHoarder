import React from 'react';

import allStuffRequests from '../../firebaseRequests/allstuff';

import './AllStuff.css';

class AllStuff extends React.Component {
  state = {
    allStuffs : [],
  }
  componentDidMount () {
    allStuffRequests
      .getRequest()
      .then((allStuffs) => {this.setState({allStuffs});
  })
      .catch((err) => {
        console.error('error in getting all stuff', err);
      });
  }

  render () {
    const allstuffComponents = this.state.allStuffs.map((allStuff) => {
      return (
        <h2>{allStuff.itemName}</h2>
      );
    });
    return (
      <div className="AllStuff">
      <h1>AllStuff</h1>
      <ul className="items">
      {allstuffComponents}
      </ul>
      </div>
    );
  }
}

export default AllStuff;
