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
        <div key={allStuff.id} className="col-sm-3 itemsCard">
        <div className ="thumbnail">
        <img className="itemImage"src={allStuff.itemImage} alt=""/>
        <h3>{allStuff.itemName}</h3>
        <p>{allStuff.itemDescription}</p>
        <button className="btn btn-primary">Add Me</button>
        </div>
        </div>
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
