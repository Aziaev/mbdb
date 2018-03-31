import constants from '../actions/constants'
import { map } from '../initial-state';

export default (state = map, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.LOCATION_CHANGED:
      updated['currentLocation'] = action.data;
      return updated;
    default:
      return updated;
  }
}
