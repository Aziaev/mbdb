import React from "react"
import {Col, ControlLabel, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap"

export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneError: null,
      inputOnFocus: false,
      notEqualPassword: false,
      password1TooShort: false,
      password2TooShort: false,
      showPhoneTip: true,
    }
    this.isValidated = this.isValidated.bind(this);
  }

  isValidated() {

    let re = /^[0-9]{10}$/;
    re.test(this.props.phoneNumber) === false
      ? this.setState({
      phoneError: (<small className='text-danger'>Нужен такой формат номера: <i>+7 9991234567</i></small>)
    })
      : this.setState({phoneError: null});

    this.setState({
      showPhoneTip: false
    });

    let notEqualPassword = this.props.password1 === this.props.password2;
    !notEqualPassword && this.setState({
      notEqualPassword: (<small className='text-danger'>Пароли не совпадают</small>)
    });

    let pass1LenghtError = !!this.props.password1.length ? (this.props.password1.length < 6) : true;
    let pass2LenghtError = !!this.props.password2.length ? (this.props.password2.length < 6) : true;

    pass1LenghtError && this.setState({
      password1TooShort: true
    });
    pass2LenghtError && this.setState({
      password2TooShort: true
    });
    return re.test(this.props.phoneNumber) && (notEqualPassword) && (!pass1LenghtError && !pass2LenghtError);
  }

  setPhone(e) {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    let field = e.target.name;
    this.props.onChangeField(value, field);
  }

  onChangeField(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.props.onChangeField(value, field);
  }

  onFocus(e) {
    this.setState({
      inputOnFocus: true,
      showPhoneTip: false
    })
  }

  onBlur(e) {
    this.setState({
      inputOnFocus: false
    })
  }

  onBlurPassword(e) {
    let value = e.target.value;
    if (value.length < 6) {
      switch (e.target.name) {
        case 'password1':
          this.setState({
            password1TooShort: true
          });
          break;
        case 'password2':
          this.setState({
            password2TooShort: true
          });
          break;
        default:
          break;
      }
    } else {
      switch (e.target.name) {
        case 'password1':
          this.setState({
            password1TooShort: false
          });
          break;
        case 'password2':
          this.setState({
            password2TooShort: false
          });
          break;
        default:
          break;
      }
    }
  }

  render() {
    let {inputOnFocus, notEqualPassword, password1TooShort, password2TooShort, phoneError, showPhoneTip } = this.state;
    let {password1, password2, phoneNumber } = this.props;
    let borderStyle = inputOnFocus ? {borderColor: '#AAAAAA'} : {};
    return (
      <div className='wizard-step'>
        <h5 className='text-center'>Укажи данные для регистрации</h5>
        <Row>
          <Col md={8} mdOffset={2} style={{height: '25px'}}>
            <FormGroup>
              <ControlLabel>Номер телефона <span className='text-danger'>* </span></ControlLabel>
            </FormGroup>
          </Col>
          <Col md={8} mdOffset={2} style={{minHeight: '70px'}}>
            <InputGroup>
              <InputGroup.Addon style={borderStyle}>+7</InputGroup.Addon>
              <FormControl
                placeholder='например: 9991234567'
                name='phoneNumber'
                value={phoneNumber}
                onFocus={(e) => this.onFocus(e)}
                onBlur={(e) => this.onBlur(e)}
                onChange={(value) => this.setPhone(value)}
                maxLength={10}
              />
            </InputGroup>
            <div>{phoneError}</div>
            {showPhoneTip && <div>
              <small><span className='text-danger'>* </span>Номер нужен для регистрации и восстановления пароля</small>
            </div>}
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2} style={{height: '90px'}}>
            <FormGroup>
              <ControlLabel>
                Пароль
              </ControlLabel>
              <FormControl
                name='password1'
                placeholder='Пароль'
                type='password'
                value={password1}
                onChange={(e) => this.onChangeField(e)}
                onBlur={(e) => this.onBlurPassword(e)}
              />
              <div>
                {password1TooShort &&
                <small><span className='text-danger'>Пароль слишком короткий, надо 6 символов</span></small>}
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2} style={{minHeight: '90px'}}>
            <FormGroup>
              <ControlLabel>
                Пароль еще раз
              </ControlLabel>
              <FormControl
                name='password2'
                placeholder='Пароль'
                type='password'
                value={password2}
                onChange={(e) => this.onChangeField(e)}
                onBlur={(e) => this.onBlurPassword(e)}
              />
              <div>{password2TooShort &&
              <small><span className='text-danger'>Пароль слишком короткий, надо 6 символов</span></small>}</div>
              <div>{notEqualPassword}</div>
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
