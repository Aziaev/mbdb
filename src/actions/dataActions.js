import constants from './constants'
import HTTPAsync from "../utils/HTTPAsync";

export default {
  addItem: (item) => {
    return {
      type: constants.ITEM_ADDED,
      data: item
    }
  },

  // Вызов асинхронного метода который диспатчит в стейт список пользователей
  getUsers: () => {
    return dispatch => {
      // console.log(`dataActions`);
      return dispatch(HTTPAsync.get('/auth/getusers', null, constants.GET_USERS))
    }
  },


  getUserById: (id) => {
    return dispatch => {
      return dispatch(HTTPAsync.get(`/auth/getUserById/${id}`, null, constants.GET_USER_BY_ID))
    }
  },
}
