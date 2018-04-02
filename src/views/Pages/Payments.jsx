import React, { Component } from 'react';
import { Col, Grid, Row, Table } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Card from '../../components/Card/Card.jsx';
import StatsCard from "../../components/Card/StatsCard";
import dashboard from "../../constants/dashboard";
import updateStatus from "../../constants/updateStatus";
import Button from '../../elements/CustomButton/CustomButton.jsx';
import { mockPayments, mockUsers } from '../../variables/Variables.jsx'
import PaymentItem from "../Components/PaymentItem";
import WithdrawAlert from "../Components/WithdrawAlert";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false,
      currentUser: mockUsers[0]
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.successDelete = this.successDelete.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.inputConfirmAlert = this.inputConfirmAlert.bind(this);
  }

  warningWithConfirmAndCancelMessage() {
    this.setState({
      alert: (
        <WithdrawAlert
          balance = {this.state.currentUser.balance}
          onConfirm={() => this.successDelete()}
          onCancel={() => this.cancelDelete()}
          cardNumber={this.state.currentUser.cardNumber}
        />
      )
    });
  }

  inputConfirmAlert(e) {
    this.setState({ alert: e });
    setTimeout(this.inputConfirmAlertNext, 200);
  }

  successDelete() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Готово!"
          showCancel={false}
          showConfirm={false}
        >
          Заявка улетела
        </SweetAlert>
      )
    });
    setTimeout(this.hideAlert, 1000);
  }

  cancelDelete() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Заявка отменена"
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
    document.title = 'Платежи. Панель управления | Music Boom'
  }

  //TODO: Добавить сортировку в полях и постраничный вывод. Пример - Datatables
  render() {
    let langCode = 0;
    let revenueAmount = 54750;
    let revenueLabel = dashboard.cards.revenue.label[langCode];
    let revenueIcon = dashboard.cards.revenue.icon;
    let lastDay = updateStatus.lastDay.label[langCode];
    let lastDayIcon = updateStatus.lastDay.icon;
    return (
      <div className="main-content">
        {this.state.alert}
        <Grid fluid>
          <Row>
            <Col md={6}>
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
                      <th>Метод оплаты</th>
                      <th className="text-right">Сумма</th>
                      <th className="text-center">Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockPayments.map((item) => {
                      if (item.method === 'card') {
                        return (
                          <PaymentItem item={item} key={item.id}/>
                        )
                      }
                      return null;
                    })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText={revenueLabel}
                statsValue={`${revenueAmount}₽`}
                statsIcon={<i className={lastDayIcon}/>}
                statsIconText={lastDay}
              />
              <Card
                title="Вывод"
                category='Список заявок на вывод средств'
                tableFullWidth
                ctAllIcons
                content={
                  <div>
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Метод оплаты</th>
                        <th className="text-right">Сумма</th>
                        <th className="text-center">Статус</th>
                      </tr>
                      </thead>
                      <tbody>
                      {mockPayments.map((item) => {
                        if (item.method === 'withdraw') {
                          return (
                            <PaymentItem item={item} key={item.id}/>
                          )
                        }
                        return null;
                      })}
                      </tbody>
                    </Table>
                    <Table responsive>
                      <Button wd onClick={() => this.warningWithConfirmAndCancelMessage(revenueAmount)}>Создать заявку на
                        вывод</Button>
                    </Table>
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

export default Payments;
