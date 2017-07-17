import React, { Component } from 'react';

class Review extends Component {

  removeReview = (e) => this.props.store.dispatch({type: 'DELETE_REVIEW', id: this.props.review.id, restaurant_id: this.props.restaurant.id})

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.removeReview}>Click here to remove {this.props.review.text}</button>
      </li>
    );
  }
};

export default Review;
