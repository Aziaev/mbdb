import constants from '../actions/constants'
import { account } from '../initial-state';

export default (state = account, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.CURRENT_USER_RECEIVED:
      updated['user'] = action.data.user;
      return updated;

    case constants.USER_UPDATED:
      updated['user'] = action.data;
      return updated;

    default:
      return updated;
  }
}
