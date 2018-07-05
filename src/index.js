import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/sass/light-bootstrap-dashboard.css';
import App from './containers/App';
import { unregister } from './registerServiceWorker';
import store from './stores'
import DonatePage from "./containers/Donate.container";

const app = (
  <Provider store={store.configure(null)}>
    <Router>
      <Switch>
        <Route exact path='/donate' component={DonatePage}/>
        <Route path='/donate/:userId' component={DonatePage}/>
        <Route path='/' component={App}/>
        <Route path='/dashboard' component={App}/>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// Отключаем сервис-воркер для всех пользователей, кто раньше имел возможность его загрузить
// fixme: удалить вызов после 16.06.2018
unregister();
