// TYPE CONSTS
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const SEARCH_JOBS = 'SEARCH_JOBS'
export const SAVE_COMPANY_JOBS = 'SAVE_COMPANY_JOBS'
export const LOAD = 'LOAD'
export const END_LOADING = 'END_LOADING'
export const TRIGGER_ERROR = 'TRIGGER_ERROR'

// favorites.js actions
export const addFavorite = (data) => ({ type: ADD_TO_FAVORITES, payload: data })
export const removeFavorite = (el) => ({
  type: REMOVE_FAVORITE,
  payload: el._id,
})

// jobs.js actions
export const saveCompanyJobs = (params) => {
  return async (dispatch) => {
    dispatch({ type: LOAD })
    const baseEndpoint =
      'https://strive-benchmark.herokuapp.com/api/jobs?company='
    try {
      const response = await fetch(baseEndpoint + params.company)
      if (response.ok) {
        const { data } = await response.json()
        dispatch({ type: SAVE_COMPANY_JOBS, payload: data })
      } else {
        throw new Error(response.status)
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: TRIGGER_ERROR, payload: `${error}` })
    } finally {
      dispatch({ type: END_LOADING })
    }
  }
}
export const searchJobs = (query) => {
  return async (dispatch) => {
    dispatch({ type: LOAD })
    const baseEndpoint =
      'https://strive-benchmark.herokuapp.com/api/jobs?search='
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        if (data.length === 0) {
          throw new Error('query not valid. Please try again.')
        } else {
          dispatch({ type: SEARCH_JOBS, payload: data })
        }
      } else {
        throw new Error(response.status)
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: TRIGGER_ERROR, payload: `${error}` })
    } finally {
      dispatch({ type: END_LOADING })
    }
  }
}
