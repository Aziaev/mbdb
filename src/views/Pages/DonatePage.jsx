import React, { Component } from 'react';
import { Col, FormControl, FormGroup, Grid, InputGroup, Navbar, Row } from 'react-bootstrap';
import avatar from "../../assets/img/default_avatar.png";
import bgImage from '../../assets/img/full-screen-image-3.jpg';
import UserCard from "../../components/Card/UserCard";
import constants from "../../constants";
import { donateButtonActive, donateButtonInactive } from "../../style/index";
import { mockUsers } from "../../variables/Variables";

class DonatePage extends Component {
  constructor() {
    super();
    this.state = {
      valid: true,
      amount: '',
      users: [],
      userId: null
    };
  }

  onButtonClick() {
    if (!this.state.amount) {
      this.setState({
        valid: false
      });
    }
  }

  componentDidMount() {
    this.props.match.params.userId ?
      this.fetchUserById(this.props.match.params.userId)
      :
      this.fetchUsers()
  }

  fetchUserById(userId) {
    this.setState({
      userId: userId
    });
  }

  fetchUsers() {
    let users = mockUsers;
    this.setState({
      users: users
    })
  }

  setValue(e) {
    let value = e.target.value.replace(/[^0-9.]/g, '').replace(/^0+/, '');
    this.setState({
      amount: value
    });
  }

  onSearch(e) {
    let filter = e.target.value;
    this.setState({
      filter: filter
    })
  }

  render() {
    let { amount, filter, users, userId } = this.state;
    let langCode = 0;
    let currentUser = mockUsers[0];
    let proceedPayment = constants.DONATE_PAGE.proceedPayment.label[langCode];
    let paymentDescription = `${constants.DONATE_PAGE.description.label[langCode]} ${currentUser.name} ${currentUser.surname} id${currentUser.id}`;
    let paymentAccountNumber = "41001996086728";
    let successUrl = "http://localhost:3000/dashboard";
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col>
              {userId ?
                <h4 className='text-center'>Вы можете отправить пожертвование этому артисту</h4>
                :
                <div>
                  <h4 className='text-center'>Ты можешь выбрать любого артиста и отправить ему пожертвование</h4>
                  <Col sm={4} smOffset={4} style={{padding: '15px'}}>
                    <FormGroup>
                      <Col sm={10}>
                        <FormControl
                          placeholder="Поиск по имени или жанру"
                          type="text"
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
            {userId ?
              <Col md={4} mdOffset={4} sm={6} smOffset={3}>
                <div className="card card-user">
                  <div className="image">
                    <img src={currentUser.photos[0] || bgImage} alt="..."/>
                  </div>
                  <div className="content">
                    <div className="author">
                      <img className="avatar border-gray" src={currentUser.avatar || avatar} alt="..."/>
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
                            className={false && 'error'}
                            onChange={(e) => this.setValue(e)}
                            placeholder='Введите сумму'
                            value={this.state.amount}
                          />
                          <InputGroup.Addon>
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
                              src={`https://money.yandex.ru/quickpay/button-widget?targets=${paymentDescription}&default-sum=${amount}&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=${successUrl}&quickpay=small&account=${paymentAccountNumber}`}
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
                    let userName = user.name.toLowerCase();
                    console.log(userName, filter)
                    let contains = userName.indexOf(filter);
                    // if (user.name.toLowerCase()
                    //     .indexOf(filter.toLowerCase()) > -1){
                      return <Col md={3} key={key}>
                        <UserCard
                          bgImage={user.photos[0] || bgImage}
                          avatar={user.avatar || avatar}
                          genre={user.genre}
                          name={`${user.name} ${user.surname}`}
                          userName={user.nickname}
                          description={user.aboutMe}
                          socials={null}
                          style={{ height: '400px' }}
                        />
                      </Col>
                    // }
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

export default DonatePage;
