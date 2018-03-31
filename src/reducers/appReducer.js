import constants from '../actions/constants'
import { app } from '../initial-state';

export default (state = app, action) => {
  let updatedApp = Object.assign({}, state);

  switch (action.type) {
    case constants.ACTIVATE_MENU_ITEM:
      if (action.data === null) {
        updatedApp['sidebar'] = { selectedMenuItem: 'dashboard' };
        return updatedApp;
      }
      updatedApp['sidebar'] = { selectedMenuItem: action.data };
      return updatedApp;

    default:
      return updatedApp
  }
}
