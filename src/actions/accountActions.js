import { TurboClient } from '../utils'
import constants from './constants'
import HTTPAsync from "../utils/HTTPAsync";

export default {
  // Это правильный способ работы экшенов. Передаем ссылку, параметры, и название экшена который дальше диспатчится
  getCurrentUser: () => {
    return dispatch => {
      return dispatch(HTTPAsync.get('/auth/currentuser', null, constants.CURRENT_USER_RECEIVED))
    }
  },

  updateUser: (request) => {
    return dispatch => {
      return dispatch(TurboClient.updateUser(constants.USER_UPDATED, request))
    }
  },

  // Второй и не верный способ вызова метода в котором данные фетчились внутри компонента
  // currentUserReceived: (user) => {
  //   return {
  //     type: 'CURRENT_USER_RECEIVED',
  //     data: user
  //   }
  // },

  // fetchUsers: (params) => {
  //   return dispatch => {
  //     return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
  //   }
  // },

  // // Unlike addUser, register() also maintains a session for login state. After calling
  // // TurboClient.createUser(), the new user is logged in as well:
  // register: (params) => {
  //   return dispatch => {
  //     return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
  //   }
  // },

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
