import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import StepZilla from 'react-stepzilla';
import ForgotCard from "../../components/Card/WizardCard";
import FinishRecoverStep from "../Forms/Wizard/Recover/FinishRecover"

class FinishRecoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      password1: '',
      password2: '',
      code: '',
      showNavigation: true,
      validCode: false
    }
  }

  componentDidMount() {
    document.title = 'Восстановление | Music Boom';

    setTimeout(function () {
      this.setState({ cardHidden: false });
    }.bind(this), 700);
  }

  onEmailChange(value) {
    this.setState({
      email: value
    })
  }

  onChangeField(value, field) {
    console.log('RecoverPage onChangeField = ', value, field);
    this.setState({
      [field]: value
    })
  }

  render() {
    let { cardHidden, password1, password2 } = this.state;
    let firstStep = {
      name: 'Смена пароля', component:
        <FinishRecoverStep
          onChangeField={(value, field) => this.onChangeField(value, field)}
          password1={password1}
          password2={password2}
        />
    };
    let stepsForRecover = [
      firstStep
    ];
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <ForgotCard
              hidden={cardHidden}
              numberOfSteps={1}
              wizard
              id="wizardFinishRecoverCard"
              textCenter
              category=""
              content={
                  <StepZilla
                    steps={stepsForRecover}
                    showSteps={true}
                    showNavigation={false}
                    stepsNavigation={false}
                    prevBtnOnLastStep={false}
                    nextButtonCls="btn btn-prev btn-info btn-fill pull-right btn-wd"
                    backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd"
                    nextButtonText={'Далее'}
                    backButtonText={'Назад'}
                    finishButtonText={'Подтвердить'}
                  />
              }
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FinishRecoverPage;
