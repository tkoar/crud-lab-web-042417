import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = this.state.text
    this.props.store.dispatch({type: 'ADD_REVIEW', text: text, restaurant_id: this.props.restaurant.id})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit.bind(this)}>Add Review!</button>
        </form>
        <Reviews restaurant={this.props.restaurant} store={this.props.store} />
      </div>
    );
  }
};

export default ReviewInput;
