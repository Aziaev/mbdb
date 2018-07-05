import React, {Component} from "react"
import {Col, ControlLabel, FormControl, FormGroup, Grid, Row} from "react-bootstrap"
import Switch from 'react-bootstrap-switch';
import $ from "jquery"
import avatar from "../../assets/img/default_avatar.png"
import bgImage from "../../assets/img/full-screen-image-3.jpg"
import Card from "../../components/Card/Card.jsx"
import UserCard from "../../components/Card/UserCard.jsx"
import FormInputs from "../../components/FormInputs/FormInputs.jsx"
import Button from "../../elements/CustomButton/CustomButton.jsx"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import artistActions from "../../actions/artistActions"
import {BACKEND_URL} from "../../variables/Variables"

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }


  componentDidMount() {
    document.title = 'Профиль. Панель управления | Music Boom'
  }

  componentWillReceiveProps = (props) => {
    if (props.user) {
      this.setState({user: props.user});
    }
  }

  save = () => {
    const userData = this.state.user;
    if (!this.cardIsValid(this.state.user.cardNumber)) {
      delete userData.cardNumber;
    }

    this.props.saveProfile(userData);
  }

  handleChange = (fieldName) => (e) => {
    const user = this.state.user;
    user[fieldName] = e.target.value;
    this.setState({user});
  }

  handleSwitchToFullName = (_, val) => {
    const user = this.state.user;
    user['name_representation'] = val ? 'FULLNAME' : 'NICKNAME';
    this.setState({user});
  }

  cardIsValid = (cardNumber) => {
    return cardNumber && parseInt(cardNumber, 10).toString() === cardNumber && cardNumber.length === 16;
  }

  handleCardChange = (e) => {
    const cardNumber = e.target.value;
    if (this.cardIsValid(cardNumber)) {
      const user = this.state.user;
      user['cardNumber'] = e.target.value;
      this.setState({user, cardInputError: false});
    } else {
      this.setState({cardInputError: true})
    }
  }

  // +790000000000
  phoneIsValid = (phoneNumber) => {
    return /^(\+79)\d{9}$/.test(phoneNumber);
  }

  handlePhoneEdit = (e) => {
    const phone = e.target.value;
    if (this.phoneIsValid(phone)) {
      const user = this.state.user;
      user['phoneNumber'] = e.target.value;
      this.setState({user, phoneInputError: false});
    } else {
      this.setState({phoneInputError: true})
    }
  }

  uploadAvatar = (e) => {
    if (e.target.firstElementChild) {
      e.target.firstElementChild.click()
    }
  }

  // fixme: вынести в экшн и не говнокодить
  submitAvatar = (e) => {
    const file = e.target.files[0]
    const refreshUserData = this.props.getCurrentUserData;
    if (file) {
      const data = new FormData();
      data.append(
        'sessionId',
        new Blob([JSON.stringify({sessionId: localStorage.getItem("sessionId")})], {type: "application/json"})
      );

      data.append('avatar', file, {type: "image/jpeg"});
      $.ajax({
        url: BACKEND_URL + '/webapi/artist/editing/avatar.change',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        success: function (data) {
          console.log('Avatar successfully uploaded', data);
          refreshUserData();
        }
      });

    }
  }


  render() {
    const {user, cardInputError, phoneInputError} = this.state;

    if (!user) {
      return null;
    }

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
                          defaultValue: user.id,
                          disabled: true
                        },
                        {
                          label: "Ник",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ник",
                          onChange: this.handleChange('nickname'),
                          defaultValue: user.nickname
                        },
                        {
                          label: "Email",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Email",
                          onChange: this.handleChange('email'),
                          defaultValue: user.email
                        }
                      ]}
                    />
                    <div>
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Имя",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Имя",
                            onChange: this.handleChange('name'),
                            defaultValue: user.name
                          },
                          {
                            label: "Фамилия",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Фамилия",
                            onChange: this.handleChange('surname'),
                            defaultValue: user.surname
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
                            onChange: this.handleChange('creativity'),
                            defaultValue: user.creativity
                          },
                          {
                            label: "Жанр",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Например, рок",
                            onChange: this.handleChange('genre'),
                            defaultValue: user.genre
                          },
                          {
                            label: "Инструмент",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Например, гитара",
                            onChange: this.handleChange('instrument'),
                            defaultValue: user.instrument
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-2", "col-md-2", "col-md-4", "col-md-4"]}
                        proprieties={[
                          {
                            label: "Страна",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Укажите страну",
                            onChange: this.handleChange('country'),
                            defaultValue: user.country
                          },
                          {
                            label: "Город",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Укажите город",
                            onChange: this.handleChange('city'),
                            defaultValue: user.city
                          },
                          {
                            label: "Телефон",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "+79000000000",
                            onChange: this.handlePhoneEdit,
                            validationState: phoneInputError ? 'error' : 'success',
                            defaultValue: user.phoneNumber
                          },
                          {
                            label: "Номер банковской карты",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Номер для получения денег",
                            validationState: cardInputError ? 'error' : 'success',
                            onChange: this.handleCardChange,
                            defaultValue: user.cardNumber
                          }
                        ]}
                      />

                      <div className="row">
                        <div className="col-md-12">
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Обо мне</ControlLabel>
                            <FormControl
                              rows="3"
                              componentClass="textarea"
                              bsClass="form-control"
                              placeholder="Расскажите о себе вашим зрителям"
                              onChange={this.handleChange('aboutMe')}
                              defaultValue={user.aboutMe}
                            />
                          </FormGroup>

                          <div>
                            <Switch
                              onText="Имя"
                              offText="Ник"
                              onColor="primary"
                              offColor="danger"
                              defaultValue={user.name_representation === 'FULLNAME'}
                              onChange={this.handleSwitchToFullName}
                            />&nbsp;Представлять вас именем и фамилией? (Иначе будет использован ник)
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      bsStyle="info"
                      pullRight
                      fill
                      type="submit"
                      onClick={this.save}
                      disabled={cardInputError || phoneInputError}
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
                bgImage={user.photos[0] || bgImage}
                avatar={user.avatar || avatar}
                name={`${user.name} ${user.surname}`}
                userName={user.nickname}
                genre={user.genre}
                description={user.aboutMe}
                socials={
                  <div style={{padding: '15px'}}>
                    Моя страница: <a href={`${window.location.protocol}//${window.location.host}/#/donate/${user.id}`}>Ссылка
                    на мой профиль</a>
                  </div>
                }
              />
              <div style={{textAlign: 'center', marginTop: -16}}>
                <Button onClick={this.uploadAvatar}>
                  <input type="file" accept=".jpg, .jpeg" id="avatar" style={{display: 'none'}}
                         onChange={this.submitAvatar}/>
                  Изменить аватар
                </Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.dashboard.data && state.dashboard.data.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProfile: bindActionCreators(artistActions.saveProfile, dispatch),
    getCurrentUserData: bindActionCreators(artistActions.getCurrentUserData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
