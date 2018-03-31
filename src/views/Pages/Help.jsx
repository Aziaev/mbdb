import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx';

class Help extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Помощь"
                category="Ответы на вопросы"
                content={
                  <div>
                    <div>
                      <h2>Что такое Music Boom<br/><p>Music Boom - это сервис который помогает уличным артистам плани
                        ровать и организовывать свои уличные выступления и зарабатывать на своих выступлениях деньги.</p></h2>
                    </div>
                    <div>
                      <h2>Мне ничего не понятно, у меня есть вопросы<br/><p>Любые вопросы и пожелания можно отправлять н
                        а электронную почту info@musboom.ru. Мы отвечаем на все письма</p></h2>
                    </div>
                    <div>
                      <h2>Какие возможности будут?<br/><p>Создание и анонс мероприятий, онлайн видеотрансляции, донаты о
                        т зрителей, статистика по мероприятиям, статистика по местам выступлений</p></h2>
                    </div>
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

export default Help;
