import React, { Component } from 'react';
import { Col, FormControl, FormGroup, Grid, InputGroup, Row } from 'react-bootstrap';
import avatar from "../../assets/img/default_avatar.png";
import bgImage from '../../assets/img/full-screen-image-3.jpg';
import UserCard from "../../components/Card/UserCard";
import constants from "../../constants/index";
import { donateButtonActive, donateButtonInactive } from "../../style/index";
import {YANDEX_WALLET} from '../../variables/Variables';


class DonatePage extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      data: [],
      filter: '',
      users: [],
      valid: true,
      userId: null,
      user: null
    };
  }

  // Метод выделяющий как ERROR поле ввода если сумма не введена
  onButtonClick() {
    if (!this.state.amount) {
      this.setState({
        valid: false
      });
    }
  }

  fetchUserById(userId) {
    this.props.getUserById(userId)
      .then(response => {
        console.log(`donate.js response = ${JSON.stringify(response)}`)
      })
      .catch(err => {
        console.log(`donate.js error = ${err.message}`)
      })
  }

  setValue(e) {
    let value = e.target.value.replace(/[^0-9.]/g, '').replace(/^0+/, '');
    this.setState({
      amount: value,
      valid: true
    });
  }

  onSearch(e) {
    let filterValue = e.target.value.toLowerCase();
    let data = this.state.data;
    if (filterValue.length === 0) {
      this.setState({
        users: this.state.data
      })
    }
    let newUsersList = data.filter((user) => {
      let genre = user.genre.toLowerCase();
      let name = user.name.toLowerCase();
      let nickname = user.nickname.toLowerCase();
      let surname = user.surname.toLowerCase();
      return genre.indexOf(filterValue) > -1
        || name.indexOf(filterValue) > -1
        || nickname.indexOf(filterValue) > -1
        || surname.indexOf(filterValue) > -1;
    });
    this.setState({
      users: newUsersList,
      filter: filterValue
    });
  }

  render() {
    let { amount, filter, valid } = this.state;
    let langCode = 0;
    let currentUser = this.props.pub.user;
    let users = this.props.pub.users;
    let proceedPayment = constants.DONATE_PAGE.proceedPayment.label[langCode];
    let paymentDescription = `${constants.DONATE_PAGE.description.label[langCode]} ${currentUser.name} ${currentUser.surname} id${currentUser.id}`;
    let paymentLabel = currentUser.id;
    let paymentAccountNumber = YANDEX_WALLET;
    let successUrl = "http://localhost:3000/dashboard";
    let error = !valid ? {borderColor: '#FB404B'} : {};
    const yandexUrl = `https://money.yandex.ru/quickpay/button-widget?targets=${paymentDescription}&default-sum=${amount}&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=${successUrl}&quickpay=small&account=${paymentAccountNumber}&label=${paymentLabel}`

    console.log(`this.props.donatePage = `, this.props, currentUser);

    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col>
              {currentUser.id ?
                <h4 className='text-center'>Вы можете отправить пожертвование этому артисту</h4>
                :
                <div>
                  <h4 className='text-center'>Ты можешь выбрать любого артиста и отправить ему пожертвование</h4>
                  <Col sm={4} smOffset={4} style={{ padding: '15px' }}>
                    <FormGroup>
                      <Col sm={10}>
                        <FormControl
                          placeholder="Поиск по имени или жанру"
                          type="text"
                          value={filter}
                          onChange={(value) => this.onSearch(value)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </div>
              }
            </Col>
          </Row>
          <Row>
            {currentUser.id ?
              <Col md={4} mdOffset={4} sm={6} smOffset={3}>
                <div className="card card-user">
                  <div className="image">
                    <img src={currentUser.photos ? currentUser.photos[0] : bgImage} alt="..."/>
                  </div>
                  <div className="content">
                    <div className="author">
                      <img className="avatar border-gray" src={`${currentUser.avatar}` || avatar} alt="..."/>
                      <h4 className="title">
                        <small>{currentUser.nickname}</small>
                        <br/>
                        {`${currentUser.name} ${currentUser.surname}`}
                      </h4>
                    </div>
                    <p className="description text-center">
                      {currentUser.genre}
                    </p>
                    <p className="description text-center">
                      {currentUser.aboutMe}
                    </p>
                  </div>

                  <hr style={{ marginBottom: '0' }}/>

                  {/* Footer */}
                  <div className="text-center" style={{ padding: '15px' }}>
                    <Row>
                      <Col xs={8} xsOffset={2} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
                        <InputGroup>
                          <FormControl
                            className={!valid && 'error'}
                            onChange={(e) => this.setValue(e)}
                            placeholder='Введите сумму'
                            value={this.state.amount}
                          />
                          <InputGroup.Addon
                            style={error}>
                            {` ₽`}
                          </InputGroup.Addon>
                        </InputGroup>
                      </Col>
                    </Row>
                    <div>
                      {this.state.amount ?
                        <div style={{ textAlign: 'center' }}>
                          <div style={donateButtonActive}>
                            <iframe
                              title='yandexPaymentButton'
                              src={yandexUrl}
                              width='227'
                              height='48'
                              frameBorder='0'
                              allowTransparency='true'
                              scrolling='no'
                            />
                          </div>
                        </div>
                        :
                        <div onClick={this.onButtonClick.bind(this)}>
                          <div style={donateButtonInactive}>
                          </div>
                        </div>
                      }
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <p className='description text-muted'>{proceedPayment}</p>
                    </div>
                  </div>
                </div>
              </Col>
              :
              <div style={{ padding: '15px' }}>
                {
                  users.map((user, key) => {
                    return <Col md={3} key={key}>
                      <UserCard
                        bgImage={currentUser.photos ? currentUser.photos[0] : bgImage}
                        avatar={user.avatar || avatar}
                        genre={user.genre}
                        name={`${user.name} ${user.surname}`}
                        userName={user.nickname}
                        description={user.aboutMe}
                        socials={null}
                        style={{ height: '400px' }}
                      />
                    </Col>
                  })
                }
              </div>
            }
          </Row>
        </Grid>
      </div>
    );
  }
}
export default DonatePage
