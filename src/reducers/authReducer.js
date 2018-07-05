import constants from '../actions/constants'
import { auth } from '../initial-state';

export default (state = auth, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.CURRENT_USER_RECEIVED:
      updated['user'] = action.data.user;
      return updated;

    case constants.USER_UPDATED:
      updated['user'] = action.data;
      return updated;

    case constants.USERS_RECEIVED:
      updated['all'] = action.data;
      return updated;

    case constants.USER_CREATED:
      let array = (updated.all) ? Object.assign([], updated.all) : [];
      array.unshift(action.data);
      updated['all'] = array;
      return updated;

    case 'CURRENT_USER_RECEIVED2':
      updated['currentUser2'] = action.data;
      // console.log(`userReducer.js CURRENT_USER_RECEIVED2 = ${JSON.stringify(newState)}`);
      return updated;

    case constants.GET_USERS:
      updated['users'] = action.data.users;
      // console.log(`userReducer.js GET_USERS => ${JSON.stringify(action.data.users)}`);
      return updated;

    case constants.AUTHENTICATE_REQUEST_SUCCESS:
      updated['status'] = action.data.status;
      updated['error'] = action.data.error;
      updated['user'] = action.data.user;
      return updated;

    case constants.AUTHENTICATE_REQUEST_ERROR:
      updated['status'] = action.data.status;
      updated['error'] = action.data.error;
      return updated;

    case constants.PASSWORD_RECOVER_REQUEST_SUCCESS:
      updated['password_recovery_status'] = action.data.status;
      updated['password_recovery_error'] = null;
      return updated;

    case constants.PASSWORD_RECOVER_REQUEST_ERROR:
      updated['password_recovery_status'] = action.data.status;
      updated['password_recovery_error'] = action.data.error;
      return updated;

    case constants.PASSWORD_CHANGE_REQUEST_ERROR:
      updated['password_change_status'] = action.data.status;
      updated['password_change_error'] = action.data.error;
      return updated;

    case constants.PASSWORD_CHANGE_REQUEST_SUCCESS:
      updated['password_change_status'] = action.data.status;
      updated['password_change_error'] = null;
      return updated;

    case constants.EMAIL_CONFIRMATION_REQUEST_ERROR:
      updated['email_confirmation_status'] = action.data.status;
      updated['email_confirmation_error'] = action.data.error;
      return updated;

    case constants.EMAIL_CONFIRMATION_REQUEST_SUCCESS:
      updated['email_confirmation_status'] = action.data.status;
      updated['email_confirmation_error'] = null;
      return updated;

    default:
      return updated;
  }
}
