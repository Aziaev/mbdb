import Promise from 'bluebird'
import superagent from 'superagent'
import { BACKEND_URL } from "../variables/Variables";

const getRequest = (url, params) => {
  return new Promise((resolve, reject) => {
    superagent.get(BACKEND_URL + url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err);
          return
        }

        const payload = response.body || response.text;
        resolve(payload)
      })
  })
};

const postRequest = (url, body) => {
  return new Promise((resolve, reject) => {
    superagent.post(BACKEND_URL + url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err);
          return
        }
        const payload = response.body || response.text;
        resolve(payload)
      })
  })
};

export default {
  post: (url, body, actionType) => {
    return dispatch => postRequest(url, body)
      .then(data => {
        // console.log('HTTPAsync.js post: ' + JSON.stringify(data))
        if (actionType !== null) {
          dispatch({
            type: actionType,
            data: data
          })
        }
        return data
      })
      .catch(err => {
        throw err
      })
  },

  get: (url, params, actionType) => {
    return dispatch => getRequest(url, params)
      .then(data => {
        // console.log(`HTTPAsync.js get from ${url}, with params: ${JSON.stringify(params)}, with data: ${JSON.stringify(data)}`);
        if (actionType !== null) {
          dispatch({
            type: actionType,
            data: data
          })
        }

        return data
      })
      .catch(err => {
        throw err
      })
  }
}
