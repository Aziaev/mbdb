import * as firebase from 'firebase';
import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import { auth } from '../../../../helpers/auth'
import { EMAIL_REGEXP } from '../../../../variables/Variables';


class RecoverStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaError: null,
      emailError: null,
      inputOnFocus: false,
      captchaChecked: false,
    }
  }

  componentDidMount() {
    let toggleCaptcha = (bool) => {
      if (bool) {
        this.setState({
          captchaChecked: true,
          captchaError: null
        })
      } else {
        this.setState({
          captchaChecked: false,
          captchaError: <small className='text-danger'>Нужно ввести капчу</small>
        })
      }
    };
    firebase.auth().languageCode = 'ru';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      'size': 'small',
      'callback': function (response) {
        toggleCaptcha(true)
      },
      'expired-callback': function () {
        toggleCaptcha(false)
      }
    });
    window.recaptchaVerifier.render().then(function (widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  }

  isValidated() {
    let { email } = this.props;

    let emailError = !EMAIL_REGEXP.test(email);
    (emailError) ?
      this.setState({
        emailError: (<small className='text-danger'>Проверьте адрес. Похоже, что-то не так</small>)
      })
      : this.setState({ emailError: null });


    this.state.captchaChecked
      ? this.setState({ captchaError: null })
      : this.setState({
        captchaError: (<small className='text-danger'>Нужно пройти капчу</small>)
      });

    return !emailError && this.state.captchaChecked;
  }

  onVerifyPhone(phoneNumber) {
    let appVerifier = window.recaptchaVerifier;
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmResult => {
        window.confirmResult = confirmResult;
      })
      .catch(error => {
        console.log('error', error);
      });

  }

  toggleCaptcha(bool) {
    if (bool) {
      this.setState({
        captchaChecked: true,
        captchaError: null
      })
    } else {
      this.setState({
        captchaChecked: false,
        captchaError: <small className='text-danger'>Нужно ввести капчу</small>
      })
    }
  }

  setValue(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.props.onChangeField(value, field)
  }

  onFocus(e) {
    this.setState({
      phoneError: null,
      inputOnFocus: true,
      showPhoneTip: false
    })
  }

  onBlur(e) {
    this.setState({
      inputOnFocus: false
    })
  }

  render() {
    let { captchaError, phoneError, showPhoneTip, emailError } = this.state;
    let { email } = this.props;
    return (
      <div className='wizard-step'>
        <h5 className='text-center'>Введите почтовый ящик, указанный при регистрации</h5>
        <Row>
          <Col md={8} mdOffset={2} style={{ height: '25px' }}>
            <FormGroup>
              <ControlLabel>Почтовый ящик <span className='text-danger'>* </span></ControlLabel>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2} style={{ minHeight: '70px' }}>
            <FormGroup>
              <FormControl
                className={emailError ? 'error' : ''}
                type='email'
                name='email'
                placeholder='Например: me@mail.com'
                value={email}
                onChange={(e) => this.setValue(e)}/>
              {emailError}
            </FormGroup>
            <div style={{ textAlign: 'center' }}>
              <div>{phoneError}</div>
            </div>
            {showPhoneTip && <div>
              <small><span className='text-danger'>* </span>Номер нужен для восстановления пароля</small>
            </div>}
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: -10 }} id='recaptcha'/>
              <div>{captchaError}</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecoverStep1;
