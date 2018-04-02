import React, { Component } from 'react';
import { Col, Grid, Row, Table } from 'react-bootstrap';
import SetStatusAlert from "../Components/SetStatusAlert";
import Card from '../../components/Card/Card.jsx';
import SweetAlert from 'react-bootstrap-sweetalert';
import { mockPayments, mockUsers, tdArray, thArray } from '../../variables/Variables.jsx';
import PaymentItem from "../Components/PaymentItem";

class AdminPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.cancel = this.cancel.bind(this);
    this.accept = this.accept.bind(this);
  }

  setStatus() {
    this.setState({
      alert: (
        <SetStatusAlert
          onConfirm={() => this.accept()}
          onCancel={() => this.cancel()}
        />
      )
    });
  }

  accept() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Готово!"
          showCancel={false}
          showConfirm={false}
        >
          Запрос на смену статуса отправлен
        </SweetAlert>
      )
    });
    setTimeout(this.hideAlert, 1500);
  }

  cancel() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Отмена"
          showCancel={false}
          showConfirm={false}
        />
      )
    });
    setTimeout(this.hideAlert, 1000);
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  componentDidMount() {
    document.title = 'Панель администратора | Music Boom'
  }

  render() {
    let currentUser = mockUsers[0];
    let langCode = 0;
    return (
      <div className="main-content">
        {this.state.alert}
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Заявки на выплаты"
                category="Все заявки на вывод от артистов"
                tableFullWidth
                content={
                  <div>
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Имя</th>
                        <th>Метод оплаты</th>
                        <th>Номер карты</th>
                        <th className="text-right">Сумма</th>
                        <th className="text-center">Статус</th>
                      </tr>
                      </thead>
                      <tbody>
                      {mockPayments.map((item) => {
                        if (item.method === 'withdraw') {
                          return (
                            <PaymentItem
                              item={item}
                              key={item.id}
                              user={currentUser}
                              admin={true}
                              cardNumber={currentUser.cardNumber}
                              onClick={() => this.setStatus.bind(this)}
                            />
                          )
                        }
                        return null;
                      })}
                      </tbody>
                    </Table>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Поступления"
                category='Список всех поступивших пожертвований'
                tableFullWidth
                ctAllIcons
                content={
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Дата</th>
                      <th className="text-left">Отправитель</th>
                      <th className="text-left">Получатель</th>
                      <th className="text-left">Метод оплаты</th>
                      <th className="text-right">Сумма</th>
                      <th className="text-center">Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockPayments.map((item) => {
                      if (item.method === 'card') {
                        return (
                          <PaymentItem
                            item={item}
                            showSender={true}
                            showReciever={true}
                            key={item.id}
                            sender={item.sender_id}
                            user={currentUser}
                          />
                        )
                      }
                      return null;
                    })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AdminPayments;
