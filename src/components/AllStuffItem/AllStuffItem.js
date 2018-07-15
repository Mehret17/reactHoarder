import React from 'react';

import './AllStuffItem.css';

class AllStuffItem extends React.Component {
  render () {
    const {details} = this.props
    const addStuff = (e) => {
      this.props.saveStuff(this.props.details);
    };
      return (
        <div className="col-sm-3 itemCard">
        {/* <div key={allStuff.id} className="col-sm-3 itemsCard"> */}
        <div className ="thumbnail">
        <img className="itemImage"src={details.itemImage} alt=""/>
        <h3>{details.itemName}</h3>
        <p>{details.itemDescription}</p>
        <button className="btn btn-primary"onClick={addStuff}>Add</button>
        </div>
        </div>
      );
    };
  };

export default AllStuffItem;