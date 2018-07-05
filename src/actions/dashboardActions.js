import constants from './constants'
import HTTPAsync from "../utils/HTTPAsync";

export default {

  addItem: (item) => {
    return {
      type: constants.ITEM_ADDED,
      data: item
    }
  },

  locationChanged: (location) => {
    return {
      type: constants.LOCATION_CHANGED,
      data: location
    }
  },

  // Вызов асинхронного метода который диспатчит в стейт текущего пользователя
  currentUser: () => {
    return dispatch => {
      return dispatch(HTTPAsync.get('/auth/currentuser', null, constants.CURRENT_USER_RECEIVED))
    }
  },

  // Второй способ вызова метода
  currentUserReceived: (user) => {
    return {
      type: 'CURRENT_USER_RECEIVED2',
      data: user
    }
  },

  // Вызов асинхронного метода который диспатчит в стейт список пользователей
  getUsers: () => {
    return dispatch => {
      return dispatch(HTTPAsync.get('/auth/getusers', null, constants.GET_USERS))
    }
  },


  // fetchUsers: (params) => {
  //   return dispatch => {
  //     return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
  //   }
  // },
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
