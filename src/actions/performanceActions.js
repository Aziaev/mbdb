import constants from "./constants/index"
import HTTPAsync from "../utils/HTTPAsync"
import artistActions from "./artistActions"


const startPerformance = ({longitude, latitude}) => {
  return dispatch => {
    dispatch({type: constants.PERFORMANCE_START_REQUEST});
    return dispatch(HTTPAsync.post('mapi/artist/performance.start', {
      sessionId: localStorage.getItem("sessionId"),
      longitude,
      latitude
    }, constants.PERFORMANCE_START_SUCCESS));
  }
}

const validatePerformance = ({longitude, latitude}) => {
  return dispatch => {
    dispatch({type: constants.PERFORMANCE_VALIDATION_REQUEST});
    return dispatch(HTTPAsync.post('mapi/artist/performance.validation', {
      sessionId: localStorage.getItem("sessionId"),
      longitude,
      latitude
    }, constants.PERFORMANCE_VALIDATION_SUCCESS))
      .then(() => {
        artistActions.getCurrentUserData()(dispatch)
      })
  }
}

const stopPerformance = () => {
  return dispatch => {
    dispatch({type: constants.PERFORMANCE_STOP_REQUEST});
    return dispatch(HTTPAsync.post('mapi/artist/performance.end', {
      sessionId: localStorage.getItem("sessionId")
    }, constants.PERFORMANCE_STOP_SUCCESS))
      .then((data) => {
        if (data.status !== 'ERROR') {
          artistActions.getCurrentUserData()(dispatch)
        }
      })
  }
}

export default {
  startPerformance,
  validatePerformance,
  stopPerformance
}
