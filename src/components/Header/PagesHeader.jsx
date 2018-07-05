import React, {Component} from "react"
import {Nav, Navbar, NavItem} from "react-bootstrap"
import {NavLink, withRouter} from "react-router-dom"
import constants from "../../constants"
import "./Header.css"
import {connect} from "react-redux"
import UserMenu from "./UserMenu"
import authActions from "../../actions/authActions"


const EVENTS = {
  APP: 'APP',
  ABOUT: 'ABOUT',
  FOR_ARTISTS: 'FOR_ARTISTS',
  LOGIN: 'LOGIN',
  ARTIST_REGISTER: 'ARTIST_REGISTER',
  USER_REGISTER: 'USER_REGISTER',
  USER_PROFILE: 'USER_PROFILE',
  LOGOUT: 'LOGOUT'
}

class PagesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }

  // function that sets the class to active of the active page
  activeRoute(routeName) {
    return window.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  handleOptionSelect = (optionIndex) => {

    switch (optionIndex) {
      case EVENTS.USER_REGISTER:
        this.props.history.push('registration');
        break;
      case EVENTS.ARTIST_REGISTER:
        this.props.history.push('artist_registration');
        break;
      case EVENTS.ABOUT:
        this.props.history.push('promo');
        break;
      case EVENTS.FOR_ARTISTS:
        this.props.history.push('for_artists');
        break;
      case EVENTS.LOGIN:
        this.props.history.push('login');
        break;
      case EVENTS.USER_PROFILE:
        this.props.history.push('dashboard');
        break;
      case EVENTS.LOGOUT:
        this.props.logout();
        break;
      default:
        break;
    }

  }

  updateWidth() {
    this.setState({width: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  render() {
    return (
      <Navbar collapseOnSelect inverse className="navbar-primary navbar-transparent navbar-absolute"
              onSelect={this.handleOptionSelect}>
        <Navbar.Header className="inline-button brand">
          <Navbar.Brand>
            <NavLink to='/' className="nav-link">
              {constants.APP_NAME}
            </NavLink>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullLeft bsStyle="pills">
            <NavItem eventKey={EVENTS.ABOUT} href="#/promo" className="about-button inline-button">
              О сервисе
            </NavItem>
            <NavItem eventKey={EVENTS.FOR_ARTISTS} href="#/for_artists" className="about-button inline-button">
              Для артистов
            </NavItem>
          </Nav>
          {
            // fixme: вынести в константы статусы пользователя
            (this.props.userStatus === 'UNAUTHENTICATED' || !this.props.userStatus) ?
              <Nav pullRight>
                <NavItem eventKey={EVENTS.LOGIN} className="inline-button">
                  Вход
                </NavItem>

                <NavItem eventKey={EVENTS.ARTIST_REGISTER} className="inline-button">
                  Регистрация
                </NavItem>
              </Nav> :
              <UserMenu user={this.props.user} events={EVENTS}/>
          }
      </Navbar>
    );
  }
}

const stateToProps = (state) => {
  return {
    userStatus: state.dashboard.data ? state.dashboard.data.status : null,
    user: state.dashboard.data ? state.dashboard.data.user : null
  };
};

const dispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout())
  }
};

export default withRouter(connect(stateToProps, dispatchToProps)(PagesHeader));
