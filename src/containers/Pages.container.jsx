import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import bgImage from '../assets/img/hdbg.jpg';
import Footer from '../components/Footer/Footer.jsx';
import PagesHeader from '../components/Header/PagesHeader.jsx';
import authActions from "../actions/authActions";
import pagesRoutes from "../routes/pages"
import artistActions from "../actions/artistActions"

class Pages extends Component {
  getPageClass() {
    let pageClass = "";
    switch (this.props.location.pathname) {
      case "/login":
        pageClass = " login-page";
        break;
      case "/registration":
        pageClass = " login-page";
        break;
      case "/artist_registration":
        pageClass = " login-page";
        break;
      case "/recover":
        pageClass = " login-page";
        break;
      case "/finish_recover":
        pageClass = " login-page";
        break;
      case "/finish_registration":
        pageClass = " login-page";
        break;
      case "/": // Стили для стартовой страницы
        pageClass = " register-page";
        break;
      default:
        pageClass = " register-page";
        break;
    }
    return pageClass;
  }

  componentWillMount() {
    if (document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
    this.props.getCurrentUserData();
  }

  getComponentWithProps = (Cmp, props) => {
    return <Cmp {...this.props} {...props} />
  }

  render() {
    return (
      <div>
        <PagesHeader/>
        <div className="wrapper wrapper-full-page">
          <div className={"full-page" + this.getPageClass()} data-color="black" data-image={bgImage}>
            <div className="content">
              <Switch>
                {
                  pagesRoutes.map((prop, key) => {
                    return (
                      <Route
                        path={prop.path}
                        key={key}
                        render={(props) => this.getComponentWithProps(prop.component, props)}
                      />
                    );
                  })
                }
              </Switch>
            </div>
            <Footer transparent/>
            <div className="full-page-background" style={{ backgroundImage: "url(" + bgImage + ")" }}></div>
          </div>
        </div>
      </div>
    );
  }
}


const stateToProps = (state) => {
  return {
    auth: state.auth,
    dashboard: state.dashboard,
    pub: state.pub
  };
};

const dispatchToProps = (dispatch) => {
  return {
    createListener: (data) => dispatch(authActions.createListener(data)),
    createArtist: (data) => dispatch(authActions.createArtist(data)),
    getCurrentUserData: () => dispatch(artistActions.getCurrentUserData())
  }
};

export default connect(stateToProps, dispatchToProps)(Pages);
