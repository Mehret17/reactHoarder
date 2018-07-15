import React from 'react';

import allStuffRequests from '../../firebaseRequests/allstuff';
import AllStuffItem from '../AllStuffItem/AllStuffItem';
// import authRequests from '../../firebaseRequests/auth';
// import myStuffRequests from '../../firebaseRequests/mystuffs'

import './AllStuff.css';



class AllStuff extends React.Component {
  state = {
    allStuffs : [],
    // myStuff: {},
  }
  
  
  // saveStuff = () => {
  //   // const newOrder = {...this.state.myStuff}
  //   const newStuff = {...this.state.allStuff};
  //   newStuff.id = authRequests.getUid();
  //   myStuffRequests
  //     .postRequest(newStuff)
  //     .then(() => {
  //       this.props.history.push('/mystuff');
  //     })
  //     .catch((err) => {
  //       console.error('error in mystuff post', err);
  //     });
  // }

  componentDidMount () {
    allStuffRequests
      .getRequest()
      .then((allStuffs) => {
        this.setState({allStuffs});
  })
      .catch((err) => {
        console.error('error in getting all stuff', err);
      });
  }

  render () {
    const allstuffComponents = this.state.allStuffs.map((allStuff) => {
      // const addStuff = (e) => {
       
      // //   this.saveStuff(newStuff);

      // }
      return (
        <AllStuffItem
         key={allStuff.id}
         details={allStuff}
        />
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
