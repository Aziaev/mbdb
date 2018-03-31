import constants from '../actions/constants'
import initialState from '../initial-state';

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {

    // case constants.CURRENT_USER_RECEIVED:
    //   console.log(`userReducer.js CURRENT_USER_RECIEVED = ${JSON.stringify(action.data)}`);
    //   newState['currentUser'] = action.data;
    //   return newState;

    case constants.USERS_RECEIVED:
      newState['all'] = action.data;
      return newState;

    case constants.USER_CREATED:
      let array = (newState.all) ? Object.assign([], newState.all) : [];
      array.unshift(action.data);
      newState['all'] = array;
      return newState;

    case 'CURRENT_USER_RECEIVED2':
      newState['currentUser2'] = action.data;
      // console.log(`userReducer.js CURRENT_USER_RECEIVED2 = ${JSON.stringify(newState)}`);
      return newState;

    case constants.GET_USERS:
      newState['users'] = action.data.users;
      // console.log(`userReducer.js GET_USERS => ${JSON.stringify(action.data.users)}`);
      return newState;

    default:
      return newState
  }
}
