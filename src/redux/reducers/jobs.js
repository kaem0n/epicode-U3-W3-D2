import { END_LOADING, LOAD, SAVE_COMPANY_JOBS, SEARCH_JOBS } from '../actions'

const defaultState = {
  search: [],
  companyJobs: [],
  isLoading: false,
}

const jobsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        search: action.payload,
      }
    case SAVE_COMPANY_JOBS:
      return {
        ...state,
        companyJobs: action.payload,
      }
    case LOAD:
      return {
        ...state,
        isLoading: true,
      }
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default jobsReducer
