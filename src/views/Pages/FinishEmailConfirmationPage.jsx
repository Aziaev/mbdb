import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import {bindActionCreators} from "redux"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import authActions from "../../actions/authActions"

class FinishEmailConfirmationPage extends Component {

  state = {
    alert: null
  }

  componentDidMount() {
    document.title = 'Подтверждение e-mail | Music Boom';
    setTimeout(function () {
      this.setState({ cardHidden: false });
    }.bind(this), 700);
    const paths = this.props.location.pathname.split('/')
    const code = paths[paths.length-1]
    this.props.confirmEmail(code)
  }

  componentWillReceiveProps(newProps) {
    if(newProps.emailConfirmationStatus === 'ERROR') {
      this.errorAlert(newProps.emailConfirmationError.message)
    } else if (newProps.emailConfirmationStatus === 'SUCCESS') {
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
            this.props.history.push('/login');
          }}
          onCancel={() => this.setState({alert: null})}
          confirmBtnBsStyle="info"
        >
          Ваш e-mail успешно подтвержден
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
          onConfirm={() => {
            this.setState({alert: null});
            this.props.history.push('/');
          }}
          onCancel={() => this.setState({alert: null})}
          confirmBtnBsStyle="info"
        >
          {err}
        </SweetAlert>
      )
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            {this.state.alert}
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    emailConfirmationStatus: state.auth.email_confirmation_status,
    emailConfirmationError: state.auth.email_confirmation_error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    confirmEmail: bindActionCreators(authActions.confirmEmail, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FinishEmailConfirmationPage));
