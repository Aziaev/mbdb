import constants from '../actions/constants'
import { pub } from '../initial-state';

export default (state = pub, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {

    case constants.PUBLIC_GET_USER_BY_ID:
      updated['user'] = action.data.user;
      return updated;

    case constants.PUBLIC_GET_USERS:
      updated['users'] = action.data.artists;
      return updated;

    case constants.GET_CURRENT_USER_LOCATION:
      updated['currentUserLocation'] = action.location;
      return updated;


    case constants.GET_PERFORMERS:
      updated['performers'] = action.data.artists;
      return updated;

    default:
      return updated;
  }
}
