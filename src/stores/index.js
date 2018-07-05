import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { authReducer, dashboardReducer, pubReducer, performanceReducer } from '../reducers'

// auth - Данные для авторизации, логина, регистрации, восстановления. Хранится сессия
// public - стор для публичных данных используется на главной странице, странице доната
// dashboard - стор для данных в панели управления

let store;
export default {

  configure: (initialState) => { // initialState can be null

    const reducers = combineReducers({
      auth: authReducer, // auth - Данные для авторизации, логина, регистрации, восстановления. Хранится сессия
      dashboard: dashboardReducer, // dashboard - стор для данных в панели управления
      pub: pubReducer, // public - стор для публичных данных используется на главной странице, странице доната
      performance: performanceReducer // стор для хранения статуса текущего выступления авторизованного артиста
    });

    // Console logger
    let wares = [thunk, logger];

    if (initialState) {
      store = createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...wares));

      return store
    }

    store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(...wares)
    );

    return store
  },

  currentStore: () => {
    return store
  }
}
