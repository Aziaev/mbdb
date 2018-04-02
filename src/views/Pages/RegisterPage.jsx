import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import StepZilla from 'react-stepzilla';
import WizardCard from "../../components/Card/WizardCard";
import ArtistStep2 from "../Forms/Wizard/ArtistStep2";
import ArtistStep3 from "../Forms/Wizard/ArtistStep3";
import Step1 from "../Forms/Wizard/Step1";
import UserStep2 from "../Forms/Wizard/UserStep2";
import UserStep3 from "../Forms/Wizard/UserStep3";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      isArtist: false
    }
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ cardHidden: false });
    }.bind(this), 700);
    document.title = 'Регистрация | Music Boom'
  }

  handleSwitch(state) {
    this.setState({
      isArtist: state.state.value
    })
  }

  render() {
    let { isArtist } = this.state;
    let stepsForArtist = [
      {
        name: 'Контакты', component: <Step1 switch={
        <div>
          <Switch
            defaultValue={isArtist}
            onText="Да"
            offText="Нет"
            onChange={(el, state) => this.handleSwitch(el, state)}
          />
          <span style={{ paddingLeft: '15px' }}>Я буду выступать как артист</span>
        </div>
      }/>
      },
      { name: 'Об артисте', component: <ArtistStep2/> },
      { name: 'Подтверждение', component: <ArtistStep3/> }
    ];
    let stepsForListener = [
      {
        name: 'Контакты', component: <Step1 switch={
        <div>
          <Switch
            defaultValue={isArtist}
            onText="Да"
            offText="Нет"
            onChange={(el, state) => this.handleSwitch(el, state)}
          />
          <span style={{ paddingLeft: '15px' }}>Я буду выступать как артист</span>
        </div>
      }/>
      },
      { name: '-', component: <UserStep2/> },
      { name: 'Подтверждение', component: <UserStep3/> }
    ];
    console.log(`this.state.isArtist = `, isArtist);
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <WizardCard
              wizard
              id="wizardCard"
              textCenter
              title="Вау это регистрация"
              category=""
              content={
                <StepZilla
                  steps={isArtist ? stepsForArtist : stepsForListener}
                  showSteps={true}
                  stepsNavigation={false}
                  nextButtonCls="btn btn-prev btn-info btn-fill pull-right btn-wd"
                  backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd"
                  nextButtonText={'Далее'}
                />
              }
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RegisterPage;
