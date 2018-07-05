import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import StepZilla from 'react-stepzilla';
import ForgotCard from "../../components/Card/WizardCard";
import RecoverStep1 from "../Forms/Wizard/Recover/RecoverStep1";
import RecoverStep2 from "../Forms/Wizard/Recover/RecoverStep2";

class RecoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: '',
      email: '',
      cardHidden: true,
      isArtist: false,
      numberOfSteps: 2,
      password1: '',
      password2: '',
      code: '',
      name: '',
      surname: '',
      nickname: '',
      creativity: null,
      language: { value: 'ru', label: 'Русский' },
      city: '',
      country: 'Россия',
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
    let { cardHidden, code, email, showNavigation, validCode } = this.state;
    let firstStep = {
      name: 'Электронная почта', component:
        <RecoverStep1
          onChangeField={(value, field) => this.onChangeField(value, field)}
          email={email}
        />
    };
    let secondStep = {
      name: 'Подтверждение', component:
        <RecoverStep2
          email={email}
          code={code}
          validCode={validCode}
          onChangeField={(value, field) => this.onChangeField(value, field)}
        />
    };
    let stepsForRecover = [
      firstStep,
      secondStep
    ];
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <ForgotCard
              hidden={cardHidden}
              numberOfSteps={2}
              wizard
              id="wizardCard"
              textCenter
              category=""
              content={
                <div>
                  <StepZilla
                    steps={stepsForRecover}
                    showSteps={true}
                    showNavigation={showNavigation}
                    stepsNavigation={false}
                    prevBtnOnLastStep={false}
                    nextButtonCls="btn btn-prev btn-info btn-fill pull-right btn-wd"
                    backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd"
                    nextButtonText={'Далее'}
                    backButtonText={'Назад'}
                    finishButtonText={'Подтвердить'}
                  />
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RecoverPage;
