import moment from "moment";
import 'moment/locale/ru'
import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import Datetime from 'react-datetime';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { getLocale } from "../../../helpers";
import { borderWithError } from "../../../style";
import { creativityOptions, EMAIL_REGEXP } from '../../../variables/Variables';
import { selectOptions } from '../../../variables/Variables.jsx';

class ArtistStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdayError: false,
      emailError: false,
      nameError: false,
      surnameError: false,
      nicknameError: false,
      cityError: false,
      aboutMeError: false,
      genreError: false,
      creativityError: false
    }
    this.isValidated = this.isValidated.bind(this);
  }

  onChangeField(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.props.onChangeField(value, field);
    setTimeout(() => {
      this.setState({
        [`${field}Error`]: null
      })
    }, 350);
  }

  onChangeCreativity(value) {
    this.props.onChangeField(value, 'creativity');
    setTimeout(() => {
      this.setState({
        creativityError: null
      })
    }, 350);
  }

  isValidated() {
    let emailError = !EMAIL_REGEXP.test(this.props.email);
    (emailError) ?
      this.setState({
        emailError: (<small className='text-danger'>Без электронной почты никак</small>)
      })
      : this.setState({ emailError: null });

    let birthdayError = this.props.birthday === null;
    birthdayError ? this.setState({
        birthdayError: (<small className='text-danger'>Это обязательно</small>)
      })
      : this.setState({ birthdayError: null });

    let nicknameError = this.props.nickname.length === 0;
    nicknameError ? this.setState({
        nicknameError: (<small className='text-danger'>Ой, а псевдоним?</small>)
      })
      : this.setState({ nicknameError: null });

    let nameError = this.props.name.length === 0;
    nameError ? this.setState({
        nameError: (<small className='text-danger'>Имя обязательно</small>)
      })
      : this.setState({ nameError: null });

    let surnameError = this.props.surname.length === 0;
    surnameError ? this.setState({
        surnameError: (<small className='text-danger'>Фамилия нужна</small>)
      })
      : this.setState({ surnameError: null });

    let creativityError = this.props.creativity === null;
    creativityError ? this.setState({
        creativityError: (<small className='text-danger'>Нужно указать вид деятельности</small>)
      })
      : this.setState({ creativityError: null });

    let aboutMeError = this.props.aboutMe.length === 0;
    aboutMeError ? this.setState({
        aboutMeError: (<small className='text-danger'>Ну расскажите немного о себе, зрителям интересно</small>)
      })
      : this.setState({ aboutMeError: null });

    let cityError = this.props.city.length === 0;
    cityError ? this.setState({
        cityError: (<small className='text-danger'>Город?</small>)
      })
      : this.setState({ cityError: null });

    return !aboutMeError && !emailError && !creativityError && !nameError && !surnameError && !surnameError && !nicknameError;
  }

  onChangeDate(e) {
    if (e instanceof moment) {
      let bd = e.format('YYYY-MM-DD');
      this.props.onChangeField(bd, 'birthday');
      this.setState({ birthdayError: null });
    } else {
      const parsedDate = moment(e, 'YYYY-MM-DD', true);
      if(parsedDate.isValid()) {
        this.props.onChangeField(e, 'birthday');
        this.setState({ birthdayError: null });
      } else {
        this.setState({
          birthdayError: (<small className='text-danger'>Нужна дата в формате ГГГГ-ММ-ДД</small>)
        })
      }
    }
  }

  render() {
    let { birthdayError, emailError, nameError, surnameError, nicknameError, cityError, aboutMeError, genreError, creativityError } = this.state;
    let { aboutMe, birthday, city, country, creativity, email, genre, instrument, language, name, nickname, surname } = this.props;
    let isMusician = !!creativity && (creativity.value === 'musician');
    let langCode = 0;
    return (
      <div className='wizard-step'>
        <h5 className='text-center'>Расскажите немного о себе <span className='text-danger'>*</span></h5>

        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Электронная почта</ControlLabel>
              <FormControl
                className={emailError ? 'error' : ''}
                type='email'
                name='email'
                placeholder='Например: me@mail.com'
                value={email}
                onChange={(e) => this.onChangeField(e)}/>
              {emailError}
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>Псевдоним</ControlLabel>
              <FormControl
                className={nicknameError ? 'error' : ''}
                type='text'
                name='nickname'
                placeholder='Например: Великолепный'
                value={nickname}
                onChange={(e) => this.onChangeField(e)}/>
              {nicknameError}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Фамилия</ControlLabel>
              <FormControl
                className={surnameError ? 'error' : ''}
                type='text'
                name='surname'
                placeholder='Например: Колпаков'
                value={surname}
                onChange={(e) => this.onChangeField(e)}/>
              {surnameError}
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>Имя</ControlLabel>
              <FormControl
                className={nameError ? 'error' : ''}
                type='text'
                name='name'
                placeholder='Например: Айрат'
                value={name}
                onChange={(e) => this.onChangeField(e)}/>
              {nameError}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={isMusician ? 4 : 5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Вид деятельности</ControlLabel>
              <Select
                style={creativityError ? borderWithError : {}}
                value={creativity}
                options={creativityOptions}
                placeholder='- выберите -'
                onChange={(e) => this.onChangeCreativity(e)}
              />
              {creativityError}
            </FormGroup>
          </Col>
          <Col md={isMusician ? 3 : 5}>
            <FormGroup>
              <ControlLabel>
                Жанр
              </ControlLabel>
              <FormControl
                type='text'
                name='genre'
                value={genre}
                placeholder={isMusician && '...рок, рэп...'}
                onChange={(e) => this.onChangeField(e)}
                disabled={!creativity}
              />
              {genreError}
            </FormGroup>
          </Col>
          {isMusician &&
          <Col md={3}>
            <FormGroup>
              <ControlLabel>
                Инструмент
              </ControlLabel>
              <FormControl
                type='text'
                name='instrument'
                placeholder={isMusician && '... гитара ...'}
                value={instrument}
                onChange={(e) => this.onChangeField(e)}
                disabled={!creativity}
              />
            </FormGroup>
          </Col>
          }
        </Row>

        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Страна</ControlLabel>
              <FormControl
                type='text'
                name='country'
                placeholder='например: Россия'
                value={country}
                disabled/>
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>Город</ControlLabel>
              <FormControl
                className={cityError ? 'error' : ''}
                type='text'
                name='city'
                placeholder='например: Казань'
                value={city}
                onChange={(e) => this.onChangeField(e)}/>
              {cityError}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Дата рождения</ControlLabel>
              <Datetime
                className={'error'}
                style={{ borderColor: '#FB404B' }}
                locale={getLocale(langCode)}
                name='birthday'
                timeFormat={false}
                dateFormat='YYYY-MM-DD'
                closeOnSelect
                inputProps={{
                  placeholder: "Введите дату рождения",
                  style: birthdayError ? { borderColor: '#FB404B' } : {}
                }}
                value={birthday}
                onChange={(e) => this.onChangeDate(e)}/>
              {birthdayError}
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>Язык</ControlLabel>
              <Select
                name='language'
                value={language}
                options={selectOptions}
                palceholder='- язык -'
                disabled
                onChange={(e) => this.onChangeField(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={10} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Расскажите о себе </ControlLabel>
              <FormControl
                className={aboutMeError ? 'error' : ''}
                componentClass='textarea'
                rows='2'
                type='textarea'
                name='aboutMe'
                placeholder='напишите о творчестве или то чем хотите поделиться со слушателями'
                value={aboutMe}
                onChange={(e) => this.onChangeField(e)}/>
              {aboutMeError}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={10} mdOffset={1}>
            <span className='text-danger'>*</span> - все поля обязательны для заполнения. Часть полей - это служебная
            информация для отображения в поиске. Остальная информация для зрителей - им интересно узнать больше об
            артисте.
          </Col>
        </Row>
      </div>
    );
  }
}

export default ArtistStep;
