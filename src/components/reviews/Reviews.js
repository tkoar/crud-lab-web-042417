import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  filterReviews = () => this.props.store.getState().reviews.filter(review => this.props.restaurant.id === review.restaurant_id)

  render() {
    return (
      <ul>
        {this.filterReviews().map((review, i) => <Review key={i} store={this.props.store} review={review} restaurant={this.props.restaurant}/>)}
      </ul>
    );
  }
};

export default Reviews;
