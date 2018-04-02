import React, { Component } from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import LoginCard from "../../components/Card/LoginCard";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true
    }
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ cardHidden: false });
    }.bind(this), 700);
    document.title = 'Вход на сайт | Music Boom'
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <form>
              <LoginCard
                hidden={this.state.cardHidden}
                textCenter
                title="Вход на сайт"
                content={
                  <div>
                    <FormGroup>
                      <ControlLabel>
                        Email
                      </ControlLabel>
                      <FormControl
                        placeholder="Введите email"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>
                        Пароль
                      </ControlLabel>
                      <FormControl
                        placeholder="Введите пароль"
                        type="password"
                      />
                    </FormGroup>
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

export default LoginPage;
