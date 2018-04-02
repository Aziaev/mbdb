import React, { Component } from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import avatar from "../../assets/img/default_avatar.png";
import bgImage from '../../assets/img/full-screen-image-3.jpg';
import Card from '../../components/Card/Card.jsx';
import UserCard from '../../components/Card/UserCard.jsx';
import FormInputs from '../../components/FormInputs/FormInputs.jsx';
import Button from '../../elements/CustomButton/CustomButton.jsx';
import { mockUsers } from "../../variables/Variables";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserIsArtist: mockUsers[0].userType === 'artist',
    };
  }

  toggle() {
    let currentUserIsArtist = this.state.currentUserIsArtist;
    this.setState({
      currentUserIsArtist: !currentUserIsArtist,
    });
  }

  componentDidMount() {
    document.title = 'Профиль. Панель управления | Music Boom'
  }

  render() {
    let currentUser = mockUsers[0];
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Профиль"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Id пользователя",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: currentUser.id,
                          disabled: true
                        },
                        {
                          label: "Ник",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ник",
                          defaultValue: currentUser.nickname
                        },
                        {
                          label: "Email",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: currentUser.email
                        }
                      ]}
                    />
                    <div>
                      <Switch
                        onText="Да"
                        offText="Нет"
                        defaultValue={currentUser.userType === 'artist'}
                        onChange={() => this.toggle()}
                      /> Я планирую выступать
                    </div>
                    {this.state.currentUserIsArtist
                    &&
                    <div>
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Имя",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Имя",
                            defaultValue: currentUser.name
                          },
                          {
                            label: "Фамилия",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Фамилия",
                            defaultValue: currentUser.surname
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                        proprieties={[
                          {
                            label: "Тип деятельности",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Например, музыкант",
                            defaultValue: currentUser.creativity
                          },
                          {
                            label: "Жанр",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Например, рок",
                            defaultValue: currentUser.genre
                          },
                          {
                            label: "Инструмент",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Например, гитара",
                            defaultValue: currentUser.instrument
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                        proprieties={[
                          {
                            label: "Страна, город",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Укажите страну и город",
                            defaultValue: `${currentUser.country}, ${currentUser.city}`
                          },
                          {
                            label: "Телефон",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Телефон очень нужен!",
                            defaultValue: currentUser.phoneNumber
                          },
                          {
                            label: "Номер банковской карты",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Номер для получения денег",
                            defaultValue: currentUser.cardNumber
                          }
                        ]}
                      />

                      <div className="row">
                        <div className="col-md-12">
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Обо мне</ControlLabel>
                            <FormControl rows="3" componentClass="textarea" bsClass="form-control"
                                         placeholder="Расскажите о себе вашим зрителям"
                                         defaultValue={currentUser.aboutMe}/>
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                    }
                    <Button
                      bsStyle="info"
                      pullRight
                      fill
                      type="submit"
                    >
                      Обновить профиль
                    </Button>
                    <div className="clearfix"></div>
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage={currentUser.photos[0] || bgImage}
                avatar={currentUser.avatar || avatar}
                name={`${currentUser.name} ${currentUser.surname}`}
                userName={currentUser.nickname}
                genre={currentUser.genre}
                description={currentUser.aboutMe}
                socials={
                  <div style={{ padding: '15px'}}>
                    Моя страница: <a href={`https://musboom.ru/donate/${currentUser.id}`}>Ссылка на мой профиль</a>
                  </div>
                }
              />

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserPage;
