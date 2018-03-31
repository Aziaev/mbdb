import React, { Component } from 'react';
import { Col, FormControl, FormGroup, InputGroup, Row } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import { WithDrawElement } from "../../components/Card/WithDrawElement";
import dashboard from "../../constants/dashboard";
import { withDrawForm, withdrawItemBorderStyle } from "../../style";

class WithdrawAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  setValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    let langCode = 0;
    let { cardNumber, balance, onConfirm, onCancel } = this.props;
    let value = this.state.value;
    let inputTitle = {
      fontSize: '12px',
      marginBottom: '5px',
      textAlign: 'center',
      fontWeight: '400'
    };
    let revenueLabel = dashboard.cards.revenue.label[langCode];
    let revenueIcon = dashboard.cards.revenue.icon;
    let borderStyleDanger = (value > balance) ? withdrawItemBorderStyle : {};
    return (
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Новая заявка"
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmBtnBsStyle={'info'}
        cancelBtnBsStyle="danger"
        confirmBtnText={'Создать'}
        cancelBtnText="Отменить"
        showCancel
        showConfirm={value <= balance}
      >
        <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <div>
            <Col sm={5}>
              <WithDrawElement
                icon={revenueIcon}
                title={revenueLabel}
                balance={`${balance}₽`}
              />
            </Col>
            <Col sm={2} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <i className='fa fa-angle-right'/>
            </Col>
            <Col sm={5}>
              <WithDrawElement
                icon={`fa fa-credit-card`}
                title={'Ваша карта'}
                cardNumber={cardNumber}
              />
            </Col>
          </div>
          <div>
            <FormGroup
              controlId="formHorizontalNumber"
              style={withDrawForm}>
              <div>
                <Col sm={6} xsOffset={3}>
                  <InputGroup>
                    <FormControl
                      type="number"
                      name="type_number"
                      className={value > balance && 'error'}
                      onChange={this.setValue.bind(this)}
                      placeholder='Введите сумму'
                    />
                    <InputGroup.Addon
                      style={borderStyleDanger}>
                      {` ₽`}
                    </InputGroup.Addon>
                  </InputGroup>
                  {value > balance &&
                  <p className="text-danger" style={inputTitle}>Введите сумму не более {`${balance}₽`}</p>}
                </Col>
              </div>
            </FormGroup>
          </div>
        </Row>
      </SweetAlert>

    );
  }
}

export default WithdrawAlert;
