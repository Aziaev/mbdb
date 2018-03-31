import React, { Component } from 'react';


export class WithDrawElement extends Component {
  render() {
    let { balance, cardNumber, icon, title } = this.props;
    return (
      <div className="card card-withdraw">
        <div className="content">
          <div className="row">
            <div className="col-xs-3" style={{ verticalAlign: 'middle' }}>
              <div className="icon-small text-left" style={{ verticalAlign: 'middle' }}>
                <i className={`${icon}`}/>
              </div>
            </div>
            <div className="col-xs-9" style={{ paddingLeft: 0 }}>
              <div className="title">
                {title}
              </div>
              <div className="value">
                {balance && balance}
                {cardNumber && cardNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WithDrawElement;
