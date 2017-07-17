import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  let id = cuidFn()

  switch (action.type) {
    case 'ADD_RESTAURANT':
        const restaurant = {id: id, text: action.text}
        return {...state, restaurants: [...state.restaurants, restaurant]}
    case 'DELETE_RESTAURANT':
        let removalIndex = state.restaurants.findIndex(el => el.id === action.id)
        return Object.assign({}, state, {restaurants: [...state.restaurants.slice(0, removalIndex), ...state.restaurants.slice(removalIndex + 1)]})
    case 'ADD_REVIEW':
        const review = {id: id, text: action.text, restaurant_id: action.restaurant_id}
        return Object.assign({}, state, {reviews: [...state.reviews, review]})
    case 'DELETE_REVIEW':
        let filteredReviews = state.reviews.filter(el => el.id !== action.id)
        return {...state, reviews: filteredReviews }
    default:
      return state
  }
}
