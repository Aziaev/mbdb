import React, { Component } from 'react';
import {Alert, Col, ControlLabel, FormGroup, Grid, Row} from 'react-bootstrap';
import LoginCard from "../../components/Card/LoginCard";
import { checkPassword, checkPhoneNumber } from "../../helpers";
import PasswordInput from "../Components/PasswordInput";
import PhoneInput from "../Components/PhoneInput";
import {connect} from "react-redux"
import authActions from "../../actions/authActions"
import userStatus from "../../constants/userStatus"
import {withRouter} from "react-router-dom"

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      password: '',
      passwordError: false,
      phone: '',
      phoneError: false,
    }
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ cardHidden: false });
    }.bind(this), 700);
    document.title = 'Вход на сайт | Music Boom'
  }

  componentWillReceiveProps (props){
    const { status } = props.auth;
    if(status === userStatus.SUCCESS) {
      this.props.history.push('dashboard');
    }
  }

  onPhoneChange(value) {
    this.setState({
      phone: value
    })
  }

  onPasswordChange(value) {
    this.setState({
      password: value
    })
  }

  onClick() {
    if (this.isValidated()) {
      this.props.authenticate({login: `+7${this.state.phone}`, password: this.state.password})
    } else {
      console.log('incorrect pass or phone');
    }
  }

  isValidated() {
    let { password, phone } = this.state;

    checkPhoneNumber(phone) ?
      this.setState({ phoneError: false })
      : this.setState({
        phoneError: (<small className='text-danger'>Нужен такой формат номера: <i>+7 9991234567</i></small>)
      });

    checkPassword(password) ?
      this.setState({ passwordError: null })
      : this.setState({
        passwordError: (<small className='text-danger'>Без пароля нельзя!</small>)
      });

    return checkPhoneNumber(phone) && checkPassword(password);
  }

  render() {
    let { cardHidden, password, passwordError, phone, phoneError } = this.state;
    const { status, error } = this.props.auth;
    const authError = status === userStatus.ERROR ? error.message : null;

    return (
      <Grid>
        <Row>
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <form>
              <LoginCard
                hidden={cardHidden}
                textCenter
                title="Вход на сайт"
                onClick={() => this.onClick()}
                content={
                  <div>
                    <FormGroup>
                      <ControlLabel>
                        Номер телефона
                      </ControlLabel>
                      <PhoneInput
                        onPhoneChange={(e) => this.onPhoneChange(e)}
                        phone={phone}
                        phoneError={phoneError}
                        noPhoneTip={true}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>
                        Пароль
                      </ControlLabel>
                      <PasswordInput
                        onPasswordChange={(e) => this.onPasswordChange(e)}
                        password={password}
                        passwordError={passwordError}
                      />
                    </FormGroup>
                    {authError &&
                      <Alert bsStyle="danger">{authError}</Alert>
                    }
                  </div>
                }
              />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const stateToProps = (state) => {
  return {
    auth: state.auth,
    dashboard: state.dashboard,
    pub: state.pub
  };
};

const dispatchToProps = (dispatch) => {
  return {
    authenticate: (data) => dispatch(authActions.authenticate(data))
  }
};

export default withRouter(connect(stateToProps, dispatchToProps)(LoginPage));
