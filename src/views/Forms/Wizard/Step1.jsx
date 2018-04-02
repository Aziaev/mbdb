import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, InputGroup, Row } from 'react-bootstrap';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneError: null,
      phone: "",
      inputOnFocus: false
    }
  }

  isValidated() {
    let re = /^[0-9]{10}$/;
    re.test(this.state.phone) === false ? this.setState({
      phoneError: (<small className="text-danger">Нужен такой формат номера: <i>+7 9991234567</i>.</small>)
    }) : this.setState({ phoneError: null });
    return re.test(this.state.phone);
  }

  setValue(e) {
    let value = e.target.value.replace(/[^0-9.]/g, '').replace(/^(1|2|3|4|5|6|7|8|0)/, '');
    this.setState({ phone: value })
  }

  onFocus(e) {
    this.setState({
      inputOnFocus: true
    })
  }

  onBlur(e) {
    this.setState({
      inputOnFocus: false
    })
  }

  render() {
    let { inputOnFocus, phone, phoneError } = this.state;
    let borderStyle = inputOnFocus ? { borderColor: '#AAAAAA' } : {};
    return (
      <div className="wizard-step">
        <h5 className="text-center">Укажиданные для регистрации</h5>
        <Row>
          <Col md={8} mdOffset={2} style={{height: '25'}}>
            <FormGroup>
              <ControlLabel>Номер телефона</ControlLabel>
            </FormGroup>
          </Col>
          <Col md={8} mdOffset={2}>
            <InputGroup>
              <InputGroup.Addon style={borderStyle}>+7</InputGroup.Addon>
              <FormControl
                placeholder="например: 9991234567"
                value={phone}
                onChange={(e) => this.setValue(e)}
                onFocus={(e) => this.onFocus(e)}
                onBlur={(e) => this.onBlur(e)}
                maxLength={10}
              />
            </InputGroup>
            {phoneError}
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2} style={{ paddingBottom: '15px' }}>
            <small><span className="text-danger">* </span>Телефон нужен только для регистрации и авторизации</small>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            {this.props.switch && this.props.switch}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Step1;
