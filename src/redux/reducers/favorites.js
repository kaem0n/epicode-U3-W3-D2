import { ADD_TO_FAVORITES, REMOVE_FAVORITE } from '../actions'

const defaultState = {
  list: [],
}

const favoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        list: state.list.filter((el) => el._id !== action.payload),
      }
    default:
      return state
  }
}

export default favoriteReducer
