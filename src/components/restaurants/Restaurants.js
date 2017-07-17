import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    console.log(this.props, this.props.store, this.props.store.getState())
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant, i) => <Restaurant key={i} restaurant={restaurant} store={this.props.store} />)}
      </ul>
    );
  }
};

export default Restaurants;
