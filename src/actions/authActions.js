import constants from './constants'
import HTTPAsync from "../utils/HTTPAsync";

export default {
  // Это правильный способ работы экшенов. Передаем ссылку, параметры, и название экшена который дальше диспатчится
  createArtist: (data) => {
    return dispatch => {
      return dispatch(HTTPAsync.post('registration?user_type=artist', data, constants.CURRENT_USER_RECEIVED))
    }
  },
  createListener: (data) => {
    return dispatch => {
      return dispatch(HTTPAsync.post('registration?user_type=listener', data, constants.CURRENT_USER_RECEIVED))
    }
  },
  authenticate: ({login, password}) => {
    return dispatch => {
      return dispatch(HTTPAsync.post('authentication', {login, password}, constants.AUTHENTICATE_REQUEST_START))
        .then(data => {
          if(data.status === 'ERROR') {
            dispatch({
              type: constants.AUTHENTICATE_REQUEST_ERROR,
              data
            })
          } else {
            console.log('Saving user session to localStorage: ', data.sessionId);
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("userId", data.user.id);
            dispatch({
              type: constants.AUTHENTICATE_REQUEST_SUCCESS,
              data
            })
          }
        })
        .catch(err => {
          dispatch({
            type: constants.AUTHENTICATE_REQUEST_ERROR,
            data: err
          })
        })
    }
  },

  logout: () => {
    return dispatch => {
      return dispatch(HTTPAsync.post('logout', {
        sessionId: localStorage.getItem("sessionId")
      }, constants.LOGOUT_REQUEST_START))
        .then(data => {
          if(data.status === 'ERROR') {
            dispatch({
              type: constants.LOGOUT_REQUEST_ERROR,
              data
            })
          } else {
            localStorage.setItem("sessionId", null);
            window.location.replace('/');
            dispatch({
              type: constants.LOGOUT_REQUEST_SUCCESS,
              data
            })
          }
        })
        .catch(err => {
          dispatch({
            type: constants.LOGOUT_REQUEST_ERROR,
            data: err
          })
        })
    }
  },

  requestPasswordRecover: (email) => {
    return dispatch => {
      return dispatch(HTTPAsync.get(`restorepassword`, {email}, constants.PASSWORD_RECOVER_REQUEST_START))
        .then(data => {
          if(data.status === 'ERROR') {
            dispatch({
              type: constants.PASSWORD_RECOVER_REQUEST_ERROR,
              data
            })
          } else {
            dispatch({
              type: constants.PASSWORD_RECOVER_REQUEST_SUCCESS,
              data
            })
          }
        })
        .catch(err => {
          dispatch({
            type: constants.PASSWORD_RECOVER_REQUEST_ERROR,
            data: err
          })
        })
    }
  },

  changePassword: (code, userId, password) => {
    return dispatch => {
      return dispatch(HTTPAsync.post(`restorepassword`, {code, userId, password, confirmPassword: password}, constants.PASSWORD_CHANGE_REQUEST_START))
        .then(data => {
          if(data.status === 'ERROR') {
            dispatch({
              type: constants.PASSWORD_CHANGE_REQUEST_ERROR,
              data
            })
          } else {
            dispatch({
              type: constants.PASSWORD_CHANGE_REQUEST_SUCCESS,
              data
            })
          }
        })
        .catch(err => {
          dispatch({
            type: constants.PASSWORD_CHANGE_REQUEST_ERROR,
            data: err
          })
        })
    }
  },

  confirmEmail: (code) => {
    return dispatch => {
      return dispatch(HTTPAsync.get(`confirmation/email/${code}`, {}, constants.EMAIL_CONFIRMATION_REQUEST_START))
        .then(data => {
          if(data.status === 'ERROR') {
            dispatch({
              type: constants.EMAIL_CONFIRMATION_REQUEST_ERROR,
              data
            })
          } else {
            dispatch({
              type: constants.EMAIL_CONFIRMATION_REQUEST_SUCCESS,
              data
            })
          }
        })
        .catch(err => {
          dispatch({
            type: constants.EMAIL_CONFIRMATION_REQUEST_ERROR,
            data: err
          })
        })
    }
  }
}
