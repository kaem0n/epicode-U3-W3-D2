const defaultState = {
  favorites: {
    list: [],
  },
}

const favoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: [...state.favorites.list, action.payload],
        },
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: state.favorites.list.filter((el) => el._id !== action.payload),
        },
      }
    default:
      return state
  }
}

export default favoriteReducer
