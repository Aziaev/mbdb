import React, { Component } from 'react';
import constants from '../../constants';

class Footer extends Component {
  render() {
    return (
      <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent" : "")}>
        <div className={"container" + (this.props.fluid !== undefined ? "-fluid" : "")}>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="https://vk.com/startup_mb" target='_blank' rel="noopener noreferrer">
                  <i className='fa fa-vk vk'/>/startup_mb
                </a>
              </li>
              <li>
                <a href='mailto:info@musboom.ru'>
                  info@musboom.ru
                </a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {1900 + (new Date()).getYear()} <a href="http://www.musboom.ru">{constants.APP_NAME}</a>, made
            with <i className="fa fa-heart heart"></i> for a better music! v.0.0.1b
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
