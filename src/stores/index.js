import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { accountReducer, appReducer, dataReducer, mapReducer } from '../reducers'

var store;
export default {

  configure: (initialState) => { // initialState can be null

    const reducers = combineReducers({
      account: accountReducer, // All current session and user data
      app: appReducer, // Only app data menus, buttons, views, components etc...
      data: dataReducer, // Downloaded data: items, users, posts, operations, notifications etc...
      map: mapReducer, //
    });

    // Console logger
    // let wares = [thunk, logger];
    let wares = [thunk];

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
