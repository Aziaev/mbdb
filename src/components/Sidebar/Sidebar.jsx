import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// this is used to create scrollbars on windows devices like the ones from apple devices
import * as Ps from 'perfect-scrollbar';
import 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css';
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from '../../assets/img/full-screen-image-3.jpg';
import dashRoutes from '../../routes/dash'
import logo from "../../assets/img/mblogo.svg";
import constants from '../../constants';
import { subMenuIcon, subMenuLabel } from "../../style";
import { mockUsers } from "../../variables/Variables";

const bgImage = { backgroundImage: "url(" + image + ")" };

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      openComponents: (this.activeRoute("/components") !== '' ? true : false),
      openForms: (this.activeRoute("/forms") !== '' ? true : false),
      openTables: (this.activeRoute("/tables") !== '' ? true : false),
      openMaps: (this.activeRoute("/maps") !== '' ? true : false),
      openPages: (this.activeRoute("/pages") !== '' ? true : false),
      isWindows: (navigator.platform.indexOf('Win') > -1 ? true : false),
      width: window.innerWidth
    }
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  // if the windows width changes CSS has to make some changes
  // this functions tell react what width is the window
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();
    // add event listener for windows resize
    window.addEventListener("resize", this.updateDimensions.bind(this));
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      Ps.initialize(this.refs.sidebarWrapper, { wheelSpeed: 2, suppressScrollX: true });
    }
  }

  componentDidUpdate() {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      setTimeout(() => {
        Ps.update(this.refs.sidebarWrapper)
      }, 350);
    }
  }

  // function that creates perfect scroll bar for windows users (it creates a scrollbar that looks like the one from apple devices)
  isMac() {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  render() {
    let user = mockUsers[0];
    return (
      <div className="sidebar" data-color="black" data-image={bgImage}>
        <div className="sidebar-background" style={bgImage}></div>
        <div className="logo">
          <a href="/" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="mb-logo"/>
            </div>
          </a>
          <a href="/" className="simple-text logo-normal">
            {constants.APP_NAME}
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebarWrapper">
          <div className="user">
            <div className="photo">
              <img src={user.avatar} alt="Avatar"/>
            </div>
            <div className="info">
              <a onClick={() => this.setState({ openAvatar: !this.state.openAvatar })}>
                                <span>
                                  {user.name} {user.surname}
                                  <b className={this.state.openAvatar ? "caret rotate-180" : "caret"}></b>
                                </span>
              </a>
              <Collapse in={this.state.openAvatar}>
                <ul className="nav">
                  {dashRoutes.map((prop, key) => {
                    let st = {};
                    st[prop["state"]] = !this.state[prop.state];
                    if (prop.redirect) {
                      return null;
                    }
                    else if (prop.position === 'profile') {
                      return (
                        <li className={this.activeRoute(prop.path)} key={key}>
                          <NavLink to={prop.path} activeClassName="active">
                            <i className={prop.icon} style={subMenuIcon}/>
                            <span className="sidebar-normal" style={subMenuLabel}>{prop.name}</span>
                          </NavLink>
                        </li>
                      );
                    } else return null;
                  })}
                </ul>
              </Collapse>
            </div>
          </div>

          <ul className="nav">
            {/* If we are on responsive, we want both links from navbar and sidebar
                            to appear in sidebar, so we render here HeaderLinks */}
            {this.state.width <= 992 ? (<HeaderLinks/>) : null}
            {/*
                here we render the links in the sidebar
                if the link is simple, we make a simple link, if not,
                we have to create a collapsible group,
                with the speciffic parent button and with it's children which are the links
            */}
            {
              dashRoutes.map((prop, key) => {
                let st = {};
                st[prop["state"]] = !this.state[prop.state];
                if (prop.collapse) {
                  return (
                    <li className={this.activeRoute(prop.path)} key={key}>
                      <a onClick={() => this.setState(st)}>
                        <i className={prop.icon}></i>
                        <p>{prop.name}
                          <b className={this.state[prop.state] ? "caret rotate-180" : "caret"}></b>
                        </p>
                      </a>
                      <Collapse in={this.state[prop.state]}>
                        <ul className="nav">
                          {
                            prop.views.map((prop, key) => {
                              return (
                                <li className={this.activeRoute(prop.path)} key={key}>
                                  <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                    <i className={prop.icon} style={subMenuIcon}></i>
                                    <span className="sidebar-normal" style={subMenuLabel}>{prop.name}</span>
                                  </NavLink>
                                </li>
                              );
                            })
                          }
                        </ul>
                      </Collapse>
                    </li>
                  )
                } else {
                  if (prop.redirect) {
                    return null;
                  }
                  else if (prop.position === 'sidebar') {
                    return (
                      <li className={this.activeRoute(prop.path)} key={key}>
                        <NavLink to={prop.path} className="nav-link" activeClassName="active">
                          <i className={prop.icon}></i>
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                    );
                  }
                  else return null;
                }
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
