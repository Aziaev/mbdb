import React from "react"
import {Button, Col, ControlLabel, FormControl, FormGroup, Row} from "react-bootstrap"
import SweetAlert from 'react-bootstrap-sweetalert';

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import authActions from "../../../../actions/authActions"
import {withRouter} from "react-router-dom"

function getQueryParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class FinishRecoverStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOnFocus: false
    }
  }

  isValidated() {
    let notEqualPassword = this.props.password1 === this.props.password2;
    !notEqualPassword && this.setState({
      notEqualPassword: (<small className='text-danger'>Пароли не совпадают</small>)
    });

    let pass1LenghtError = !!this.props.password1.length ? (this.props.password1.length < 6) : true;
    let pass2LenghtError = !!this.props.password2.length ? (this.props.password2.length < 6) : true;

    pass1LenghtError && this.setState({
      password1ToShort: true
    });
    pass2LenghtError && this.setState({
      password2ToShort: true
    });
    return (notEqualPassword) && (!pass1LenghtError && !pass2LenghtError);
  }

  onChangeField(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.props.onChangeField(value, field)
  }

  onBlurPassword(e) {
    let value = e.target.value;
    if (value.length < 6) {
      switch (e.target.name) {
        case 'password1':
          this.setState({
            password1ToShort: true
          });
          break;
        case 'password2':
          this.setState({
            password2ToShort: true
          });
          break;
        default:
          break;
      }
    } else {
      switch (e.target.name) {
        case 'password1':
          this.setState({
            password1ToShort: false
          });
          break;
        case 'password2':
          this.setState({
            password2ToShort: false
          });
          break;
        default:
          break;
      }
    }
  }

  onClick() {
    if (this.isValidated()) {
      const password = this.props.password1;
      const code = getQueryParameterByName('code')
      const id = getQueryParameterByName('id')
      this.props.changePassword(code, id, password);
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.passwordChangeStatus, newProps.passwordChangeError)
    if(newProps.passwordChangeStatus === 'ERROR') {
      this.errorAlert(newProps.passwordChangeError.message)
    } else if (newProps.passwordChangeStatus === 'SUCCESS') {
      this.successAlert()
    }
  }

  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{display: "block", marginTop: "-100px"}}
          title="Отлично!"
          onConfirm={() => {
            this.setState({alert: null});
            this.props.history.push('login');
          }}
          onCancel={() => this.setState({alert: null})}
          confirmBtnBsStyle="info"
        >
          Ваш пароль успешно изменен
        </SweetAlert>
      )
    });
  }


  errorAlert(err) {
    this.setState({
      alert: (
        <SweetAlert
          error
          style={{display: "block", marginTop: "-100px"}}
          title="Что-то пошло не так :("
          onConfirm={() => this.setState({alert: null})}
          onCancel={() => this.setState({alert: null})}
          confirmBtnBsStyle="info"
        >
          {err}
        </SweetAlert>
      )
    });
  }

  render() {
    let {password1ToShort, password2ToShort, notEqualPassword} = this.state;
    const {password1, password2} = this.props;
    return (
      <div className='wizard-step'>
        <br />
        <h5 className='text-center'>Введите новый пароль 2 раза</h5>
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
                {password1ToShort &&
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
                placeholder='Повтор пароля'
                type='password'
                value={password2}
                onChange={(e) => this.onChangeField(e)}
                onBlur={(e) => this.onBlurPassword(e)}
              />
              <div>{password2ToShort &&
              <small><span className='text-danger'>Пароль слишком короткий, надо 6 символов</span></small>}</div>
              <div>{notEqualPassword}</div>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={8} mdOffset={4} >
            <div className="wizard-finish-button">
              <Button bsStyle="info"
                      fill
                      wd
                      onClick={() => this.onClick()}
                      pullRight>
                Сохранить
              </Button>
            </div>
          </Col>
        </Row>
        {this.state.alert}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    passwordChangeStatus: state.auth.password_change_status,
    passwordChangeError: state.auth.password_change_error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: bindActionCreators(authActions.changePassword, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FinishRecoverStep));
