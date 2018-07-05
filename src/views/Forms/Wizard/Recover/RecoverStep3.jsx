import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Button from '../../../../elements/CustomButton/CustomButton';

class RecoverStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notEqualPassword: false,
      password1ToShort: false,
      password2ToShort: false,
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

  onClick(){
    this.isValidated() && this.successAlert();
  }

  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="info"
        >
          You clicked the finish button!
        </SweetAlert>
      )
    });
  }

  render() {
    let { notEqualPassword, password1ToShort, password2ToShort } = this.state;
    let { password1, password2 } = this.props;
    return (
      <div className='wizard-step'>
        <h5 className='text-center'>Введи новый пароль 2 раза</h5>
        <Row>
          <Col md={8} mdOffset={2} style={{ height: '90px' }}>
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
          <Col md={8} mdOffset={2} style={{ minHeight: '90px' }}>
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

export default RecoverStep3;
