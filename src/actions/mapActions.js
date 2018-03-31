import { TurboClient } from '../utils'
import constants from './constants'

export default {
  locationChanged: (location) => {
    return {
      type: constants.LOCATION_CHANGED,
      data: location
    }
  },


  // Clear
  fetchUsers: (params) => {
    return dispatch => {
      return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
    }
  },
  //
  // addUser: (params) => {
  //   return dispatch => {
  //     return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
  //   }
  // },
  //
  // // Unlike addUser, register() also maintains a session for login state. After calling
  // // TurboClient.createUser(), the new user is logged in as well:
  // register: (params) => {
  //   return dispatch => {
  //     return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
  //   }
  // },
  //
  // loginUser: (credentials) => {
  //   return dispatch => {
  //     return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
  //   }
  // },
  //
  // currentUser: () => {
  //   return dispatch => {
  //     return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
  //   }
  // }

}