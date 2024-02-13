import {
  END_LOADING,
  LOAD,
  SAVE_COMPANY_JOBS,
  SEARCH_JOBS,
  TRIGGER_ERROR,
} from '../actions'

const defaultState = {
  search: [],
  companyJobs: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
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
        isError: false,
        errorMsg: '',
      }
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case TRIGGER_ERROR:
      return {
        ...state,
        isError: true,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}

export default jobsReducer
