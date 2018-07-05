import { dashboard } from '../initial-state';
import constants from "../actions/constants/index"

export default (state = dashboard, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {

    case constants.ARTIST_RECEIVED:
      if(action.data.status === 'ERROR') {
        updated.error = action.data.error;
      } else {
        updated.data = action.data;
      }
      return updated;

    case constants.CARD_SAVING:
      updated.data.cardSaved = false;
      return updated;

    case constants.CARD_SAVED:
      updated.data.cardSaved = true;
      return updated;

    case constants.WITHDRAW_REQUEST_START:
      updated.data.withdrawSuccess = false;
      updated.data.withdrawError = false;
      return updated;

    case constants.WITHDRAW_SUCCESS:
      if(action.data.status === 'ERROR') {
        updated.data.withdrawError = action.data.error.message;
      } else {
        updated.data.withdrawSuccess = true;
      }
      return updated;

    default:
      return updated;
  }
}
