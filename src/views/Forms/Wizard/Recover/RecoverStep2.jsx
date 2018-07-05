import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect"
import bindActionCreators from "redux/es/bindActionCreators"
import authActions from "../../../../actions/authActions"

class RecoverStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeError: null,
      validCode: null
    }
  }

  componentDidMount(){
    this.props.email && this.props.requestPasswordRecover(this.props.email);
  }

  setValue(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.props.onChangeField(value, field);
  }

  render() {
    let { email, passwordRecoveryStatus, passwordRecoveryError } = this.props;
    return (
      <div className="wizard-step">
        {passwordRecoveryStatus === 'SUCCESS' ?
          <div>
            <h5 className='text-center'>На адрес <b>{email}</b>
              мы отправили ссылку на изменение пароля.</h5>
            <div className='text-center'>Пожалуйста, проверьте ваш почтовый ящик.</div>
          </div>
        :
          <h5>{passwordRecoveryError ? passwordRecoveryError.message : '...'}</h5>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  passwordRecoveryStatus: state.auth['password_recovery_status'],
  passwordRecoveryError: state.auth['password_recovery_error']
})

const mapDispatchToProps = (dispatch) => {
  return {
    requestPasswordRecover: bindActionCreators(authActions.requestPasswordRecover, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverStep2);
