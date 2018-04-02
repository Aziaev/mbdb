import React, { Component } from 'react';
import Button from '../../elements/CustomButton/CustomButton.jsx';

class LoginCard extends Component {
  render() {
    return (
      <div className={"card"
      + (this.props.hidden ? " card-hidden" : "")
      + (this.props.calendar ? " card-calendar" : "")
      + (this.props.plain ? " card-plain" : "")
      + (this.props.wizard ? " card-wizard" : "")}>
        {
          (this.props.title !== undefined) || (this.props.category !== undefined) ?
            (
              <div className={"header text-center"}>
                <h4 className="title">{this.props.title}</h4>
                <p className="category">{this.props.category}</p>
              </div>
            ) : ""
        }
        <div className='content'>
          {this.props.content}
        </div>
        <div className={"footer text-center"} style={{padding: '0 15px 0'}}>
          <div className="legend">
            <div>
              <Button bsStyle="info" fill wd>
                Login
              </Button>
              <div>
                <div style={{
                  display: 'table',
                  width: '100%',
                  tableLayout: 'fixed',
                  paddingTop: '27px',
                  paddingBottom: '15px'
                }}>
                  <div style={{ display: 'table-cell' }}>
                    <div style={{ height: '1px', background: 'black', marginBottom: '3px' }}/>
                  </div>
                  <div style={{ display: 'table-cell', width: '50px' }}><p className='text-center category'>
                    или</p></div>
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
                    <i className="fa fa-facebook-official category" style={{ fontSize: '2em', width: 'auto' }}/>
                  </div>
                  <div style={{ display: 'table-cell', width: '50px' }}>
                    <i className="fa fa-vk category" style={{ fontSize: '2em', width: 'auto' }}/>
                  </div>
                  <div style={{ display: 'table-cell' }}>
                    <i className="fa fa-google category" style={{ fontSize: '2em', width: 'auto' }}/>
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
