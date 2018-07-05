import React, {Component} from 'react';
import {Button, Col, Grid, Row} from 'react-bootstrap';
import QRCode from 'qrcode.react'

import Card from '../../components/Card/Card.jsx';
import * as html2canvas from "html2canvas"
import {connect} from "react-redux"

const getDonateUrl = () => `${window.location.protocol}//${window.location.host}/#/donate/${localStorage.getItem('userId')}`;

const saveBanner = () => {
  html2canvas(document.getElementById('banner')).then(function (canvas) {
    const a = document.createElement('a');
    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    a.download = 'banner.jpg';
    a.click();
  });
}

const printBanner = () => {
  html2canvas(document.getElementById('banner')).then(function (canvas) {
    const myImage = canvas.toDataURL("image/png");
    const tWindow = window.open("");
    tWindow.document.write("<img id='Image' src=" + myImage + " style='width:100%;'/>");
    tWindow.focus();
    setTimeout(() => {
      tWindow.print();
      tWindow.close();
    }, 250)
  });
}


class PrintBanner extends Component {
  componentDidMount() {
    document.title = 'Помощь. Панель управления | Music Boom'
  }

  render() {
    const {user} = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="main-content">
        <Grid>
          <Row>
            <Col md={10} style={{minWidth: 945}}>
              <h2>Ваш QR-баннер</h2>
              <div id="banner">
                <Card
                  title=""
                  content={
                    <div style={{margin: '0 32px'}}>
                      <div style={{float: 'left'}}>
                        <QRCode value={getDonateUrl()} size={400}/>
                      </div>
                      {/*fixme: убрать хардкод пикселей и переверстать на норм css*/}
                      <div style={{marginLeft: 432}}>
                        <h2>Привет, будем знакомы!</h2>
                        <p>Меня зовут <b>{user.name} {user.surname}</b>.</p>
                        <p>Я участвую в проекте <span style={{color: 'red'}}>MusicBoom</span>.</p>
                        <p>MusicBoom - это сервис, который позволит вам найти все активные выступления и перформансы в
                          вашем городе. Оно откроет вам мир живых и ярких шоу прямо на улицах вашего города.</p>

                        <p>Поддержите меня!</p>
                        <ol>
                          <li>Скачайте приложение <span style={{color: 'red'}}>MusicBoom</span> в Play Market</li>
                          <li>Перейдите во вкладку «Выступления»</li>
                          <li>Выберите меня на карте</li>
                        </ol>
                        <p>Так же вы можете воспользоваться QR-кодом.</p>
                        <p>Спасибо за вашу поддержку!</p>
                        <br/>
                      </div>
                      <h3 style={{lineHeight: 2}}><a>{getDonateUrl()}</a></h3>
                    </div>
                  }
                />
              </div>
              <Button bsStyle="primary" onClick={printBanner}>Распечатать</Button>
              &nbsp;
              <Button bsStyle="primary" onClick={saveBanner}>Сохранить</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    user: state.dashboard ? state.dashboard.data.user : null,
  };
};

export default connect(stateToProps)(PrintBanner);
