import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import StepZilla from 'react-stepzilla';
import WizardCard from '../../components/Card/WizardCard';
import FinalStep from '../Forms/Wizard/FinalStep';
import FirstStep from '../Forms/Wizard/FirstStep';
import { listenerRegistrationSelector } from "../../helpers/selectors";

class ListenerRegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isArtist: false,
      numberOfSteps: 2,
      phoneNumber: '',
      password1: '',
      password2: '',
      code: '',
      language: { value: 'ru', label: 'Русский' }
    }
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ cardHidden: false });
    }.bind(this), 700);
    document.title = 'Регистрация | Music Boom'
  }

  onPhoneChange(value) {
    this.setState({
      phoneNumber: value
    })
  }

  onCodeChange(value) {
    this.setState({
      code: value
    })
  }

  onChangePassword1(value) {
    this.setState({
      password1: value
    })
  }

  onChangePassword2(value) {
    this.setState({
      password2: value
    })
  }

  onChangeField(value, field) {
    this.setState({
      [field]: value
    })
  }

  onCreateUser = () => {
    let data = listenerRegistrationSelector(this.state);
    console.log(`data = ${JSON.stringify(data)}`);
    debugger
    this.props.createListener(data);
  }

  render() {
    let { cardHidden, code, numberOfSteps, password1, password2, phoneNumber } = this.state;
    let firstStep = {
      name: 'Контакты', component: <FirstStep
        phoneNumber={phoneNumber}
        password1={password1}
        password2={password2}
        onChangeField={(v, n) => this.onChangeField(v, n)}
      />
    };
    let finalStep = {
      name: 'Подтверждение', component:
        <FinalStep
          code={code}
          phoneNumber={phoneNumber}
          onChangeField={(v, n) => this.onChangeField(v, n)}
          onClick={() => this.onCreateUser()}
        />
    };
    let stepsForUser = [
      firstStep,
      finalStep
    ];
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <WizardCard
              hidden={cardHidden}
              numberOfSteps={numberOfSteps}
              wizard
              id='wizardCard'
              textCenter
              category=''
              content={
                <StepZilla
                  steps={stepsForUser}
                  showSteps={true}
                  stepsNavigation={false}
                  nextButtonCls='btn btn-prev btn-info btn-fill pull-right btn-wd'
                  backButtonCls='btn btn-next btn-default btn-fill pull-left btn-wd'
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

export default ListenerRegisterPage;
