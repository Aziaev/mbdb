import constants from './constants'
import HTTPAsync from "../utils/HTTPAsync";
import {FREEGEOIP_URL} from "../variables/Variables"

export default {
  // Получение пользователя по id
  getUserById: (id) => {
    return dispatch => {
      return dispatch(HTTPAsync.get(`/artist/${id}`, null, constants.PUBLIC_GET_USER_BY_ID))
    }
  },

  fetchUsers: (request) => {
    return dispatch => {
      return dispatch(HTTPAsync.get(`/artists?city=${request.city}&page=${request.page}&size=${request.size}`, null, constants.PUBLIC_GET_USERS))
    }
  },

  getCurrentUserLocationFromFreegeoip: (dispatch) => {
    HTTPAsync.get(FREEGEOIP_URL)
      .then(response => {
        dispatch({
          type: constants.GET_CURRENT_USER_LOCATION,
          location: {
            lat: response.data.latitude,
            lng: response.data.longitude
          }
        })
      })
  },

  getCurrentUserLocation: () => (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((browserLocation) => dispatch({
        type: constants.GET_CURRENT_USER_LOCATION,
        location: {
          lat: browserLocation.coords.latitude,
          lng: browserLocation.coords.longitude
        }
      }), () => {
        this.getCurrentUserLocationFromFreegeoip(dispatch);
      });
    } else {
      this.getCurrentUserLocationFromFreegeoip(dispatch);
    }
  },

  getPerformersLocation: () => (dispatch) => {
    dispatch(HTTPAsync.get('performers', null, constants.GET_PERFORMERS));
  }

}
