import constants from '../actions/constants'
import { data } from '../initial-state';

export default (state = data, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.ITEM_ADDED:
      let items = [...updated.items, action.data];
      updated['items'] = items;
      return updated;

    case constants.GET_USERS:
      updated['users'] = action.data.users;
      return updated;

    case constants.GET_USER_BY_ID:
      updated['user'] = action.data.user;
      return updated;

    default:
      return updated;
  }
}
