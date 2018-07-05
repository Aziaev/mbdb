import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../elements/CustomButton/CustomButton.jsx';

class LoginCard extends Component {
  render() {
    let { category, content, onClick, title } = this.props;
    return (
      <div className={"card"
      + (this.props.hidden ? " card-hidden" : "")}>
        {
          (title !== undefined) || (category !== undefined) ?
            (
              <div className={"header text-center"}>
                <h4 className="title">{title}</h4>
                <p className="category">{category}</p>
              </div>
            ) : ""
        }
        <div className='content'>
          {content}
        </div>
        <div className={"footer text-center"} style={{ padding: '0 15px 0' }}>
          <div className="legend">
            <div>
              <Button
                bsStyle="info"
                fill
                wd
                onClick={() => onClick()}>
                Вход
              </Button>
              <div style={{
                paddingTop: '27px'
              }}>
                <NavLink to='/recover'>Я забыл свой пароль :(</NavLink>
              </div>
              <div style={{
                paddingTop: '16px'
              }}>
                <NavLink to='/registration'>Регистрация</NavLink>
              </div>

              {/* todo: Регистрацию / вход через соцсети отключили пока не реализовано */}
              <div style={{display: 'none'}}>
                <div style={{
                  display: 'table',
                  width: '100%',
                  tableLayout: 'fixed',
                  paddingTop: '18px',
                  paddingBottom: '15px'
                }}>
                  <div style={{ display: 'table-cell' }}>
                    <div style={{ height: '1px', background: 'black', marginBottom: '3px' }}/>
                  </div>
                  <div style={{ display: 'table-cell', width: '200px' }}><p className='text-center category'>
                    или вход через соцсети</p></div>
                  <div style={{ display: 'table-cell' }}>
                    <div style={{ height: '1px', background: 'black', marginBottom: '3px' }}/>
                  </div>
                </div>

                <div style={{
                  display: 'table',
                  width: '100%',
                  tableLayout: 'fixed',
                  paddingTop: '7px'
                }}>
                  <div style={{ display: 'table-cell' }}>
                    <i className="fa fa-facebook-official category"
                       style={{ fontSize: '2em', width: 'auto', color: '#3b5998' }}/>
                  </div>
                  <div style={{ display: 'table-cell', width: '50px' }}>
                    <i className="fa fa-vk category"
                       style={{ fontSize: '2em', width: 'auto', color: '#597ba0' }}/>
                  </div>
                  <div style={{ display: 'table-cell' }}>
                    <i className="fa fa-google category"
                       style={{ fontSize: '2em', width: 'auto', color: '#ea4335' }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginCard;
