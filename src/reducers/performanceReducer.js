import {dashboard} from '../initial-state';
import constants from "../actions/constants/index"
import PERFORMANCE_STATUS from "../constants/performance"


export default (state = dashboard, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {

    case constants.PERFORMANCE_START_SUCCESS:
      if (action.data.status === 'ERROR') {
        updated.error = action.data.error;
        updated.status = PERFORMANCE_STATUS.ERROR;
      } else {
        updated.error = null;
        updated.status = PERFORMANCE_STATUS.IN_PROGRESS;
      }
      return updated;


    case constants.PERFORMANCE_STOP_SUCCESS:
      if (action.data.status === 'ERROR') {
        updated.error = action.data.error;
        updated.status = PERFORMANCE_STATUS.ERROR;
      } else {
        updated.error = null;
        updated.status = PERFORMANCE_STATUS.NOT_STARTED;
      }
      return updated;

    case constants.PERFORMANCE_VALIDATION_SUCCESS:
      if (action.data.status === 'ERROR') {
        updated.error = action.data.error;
        updated.status = PERFORMANCE_STATUS.NOT_STARTED;
      } else {
        updated.error = null;
        updated.status = PERFORMANCE_STATUS.IN_PROGRESS;
        updated.data = action.data;
      }
      return updated;

    default:
      return updated;
  }
}
