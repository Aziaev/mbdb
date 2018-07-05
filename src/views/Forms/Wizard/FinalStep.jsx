import * as firebase from "firebase"
import React, {Component} from "react"
import {Col, FormControl, FormGroup, Row} from "react-bootstrap"
import SweetAlert from "react-bootstrap-sweetalert"
import Button from "../../../elements/CustomButton/CustomButton.jsx"
import {checkPhoneNumber} from "../../../helpers"
import {withRouter} from "react-router-dom"

class FinalStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      smsSent: false
    }
  }

  componentDidMount() {

    firebase.auth().languageCode = 'ru';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      'size': 'small',
      'callback': (response) => {
        this.toggleCaptcha(true)
      },
      'expired-callback': () => {
        this.toggleCaptcha(false)
      }
    });
    window.recaptchaVerifier.render().then(function (widgetId) {
      window.recaptchaWidgetId = widgetId;
    });

    const phoneNumber = `+7${this.props.phoneNumber}`;
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {

        this.setState({smsSent: true});

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      }).catch(function (error) {
        console.warn('SMS error', error);
      // Error; SMS not sent
      // ...
    });

  }

  isValidated() {
    let {phoneNumber} = this.props;
    let validPhone = checkPhoneNumber(phoneNumber);
    !validPhone
      ? this.setState({
      phoneError: (<small className='text-danger'>Нужен такой формат номера: <i>+7 9991234567</i></small>)
    })
      : this.setState({phoneError: null});

    this.state.captchaChecked
      ? this.setState({captchaError: null})
      : this.setState({
      captchaError: (<small className='text-danger'>Нужно ввести капчу</small>)
    });

    this.setState({
      showPhoneTip: false
    });

    return (validPhone && this.state.captchaChecked);

  }

  toggleCaptcha = (bool) => {
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

  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{display: "block", marginTop: "-100px"}}
          title="Все хорошо!"
          onConfirm={() => this.setState({alert: null})}
          confirmBtnBsStyle="info"
        >
          Сейчас будет перенаправление на страницу авторизации
        </SweetAlert>
      )
    });
  }

  errorAlert() {
    this.setState({
      alert: (
        <SweetAlert
          error
          style={{display: "block", marginTop: "-100px"}}
          title="Что-то пошло не так"
          onConfirm={() => this.setState({alert: null})}
          confirmBtnBsStyle="info"
        >
          Попробуйте еще раз позже
        </SweetAlert>
      )
    });
  }

  loadingAlert() {
    this.setState({
      alert: (
        <SweetAlert
          closeOnClickOutside={false}
          style={{display: "block", marginTop: "-100px"}}
          title="Сообщение отправлено"
          showConfirm={false}
          showCancel={false}>
          <p className="text-center" style={{fontSize: '56px'}}>
            <i className='fa fa-spin fa-circle-o-notch text-info' style={{width: '56px'}}/>
          </p>
          Нужно немного подождать
        </SweetAlert>
      )
    });
  }

  setValue = (e) => {
    let value = e.target.value;
    let field = e.target.name;
    this.setState({code: value});
    this.props.onChangeField(value, field);
  }

  onClick = () => {
    if (this.isValidated()) {
      this.loadingAlert();

      window.confirmationResult.confirm(this.state.code).then((result) => {
        // User signed in successfully.

        // const user = result.user;
        this.successAlert();
      }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        this.errorAlert();
      });

      this.props.onClick();
      setTimeout(() => {
        this.props.history.push('dashboard');
      }, 2500);
    }
  }

  render() {
    const {code, phoneNumber} = this.props;
    const { captchaChecked, captchaError, smsSent } = this.state;
    return (
      <div className="wizard-step">
        {!captchaChecked &&
        <Row>
          <Col md={8} mdOffset={2}>
            <div style={{textAlign: 'center'}}>
              <div style={{display: 'inline-block', textAlign: 'center'}} id='recaptcha'/>
              <div>{captchaError}</div>
            </div>
          </Col>
        </Row>
        }
        {smsSent &&
        <div>
          <h5 className='text-center' style={{marginTop: '50px', marginBottom: '50px'}}>На номер
            <b>{`+7 ${phoneNumber}`}</b> мы отправили секретный код
          </h5>
          < Row >
            < Col md={4} mdOffset={4} style={{minHeight: '90px'}}>
              <FormGroup>
                <FormControl
                  name='code'
                  value={code}
                  placeholder='Введите код тут'
                  onChange={(value) => this.setValue(value)}
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        }
        <div className="wizard-finish-button">
          <Button bsStyle="info"
                  fill
                  wd
                  onClick={() => this.onClick()}
                  pullRight>
            Сохранить
          </Button>
        </div>
        {this.state.alert}
      </div>
    );
  }
}

export default withRouter(FinalStep);
