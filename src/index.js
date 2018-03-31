import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/sass/light-bootstrap-dashboard.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores'
import DonatePage from "./views/Pages/DonatePage";

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
registerServiceWorker();
