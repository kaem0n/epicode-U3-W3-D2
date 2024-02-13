import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favoriteReducer from '../reducers/favorites'
import jobsReducer from '../reducers/jobs'

const globalReducer = combineReducers({
  favorites: favoriteReducer,
  jobs: jobsReducer,
})

const store = configureStore({
  reducer: globalReducer,
})

export default store
