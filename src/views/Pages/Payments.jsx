import React, {Component} from 'react';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Card from '../../components/Card/Card.jsx';
import StatsCard from "../../components/Card/StatsCard";
import dashboard from "../../constants/dashboard";
import updateStatus from "../../constants/updateStatus";
import Button from '../../elements/CustomButton/CustomButton.jsx';
import {mockUsers} from '../../variables/Variables.jsx'
import WithdrawAlert from "../Components/WithdrawAlert";
import CardEditAlert from "../Components/CardEditAlert"
import {bindActionCreators} from "redux"
import artistActions from "../../actions/artistActions"
import {connect} from "react-redux"

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
          balance={this.props.data.user.currentBalance}
          onConfirm={this.confirmWithdraw}
          onCancel={() => this.cancelDelete()}
          cardNumber={this.props.data.user.cardNumber}
        />
      )
    });
  }

  inputConfirmAlert(e) {
    this.setState({alert: e});
    setTimeout(this.inputConfirmAlertNext, 200);
  }

  editCard = () => {
    this.setState({
      alert: (
        <CardEditAlert
          onConfirm={this.confirmEdit}
          onCancel={() => this.cancelEdit()}
          cardNumber={this.state.currentUser.cardNumber}
        />
      )
    })
  }

  confirmWithdraw = (withdrawAmount) => {
    this.props.withdraw(withdrawAmount);
  }

  confirmEdit = (cardNumber) => {
    this.props.saveCardNumber(cardNumber);
  }


  successDelete() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{display: "block", marginTop: "-100px"}}
          title="Готово!"
          showCancel={false}
          showConfirm={false}
        >
          Запрос отправлен
        </SweetAlert>
      )
    });
    setTimeout(this.hideAlert, 1000);
  }

  cancelEdit() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{display: "block", marginTop: "-100px"}}
          title="Отмена"
          showCancel={false}
          showConfirm={false}
        />
      )
    });
    setTimeout(this.hideAlert, 1000);
  }

  cancelDelete() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{display: "block", marginTop: "-100px"}}
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

  componentWillReceiveProps = (newProps) => {
    if (newProps.data.cardSaved) {
      this.successDelete()
    }

    if(newProps.data.withdrawSuccess) {
      this.successDelete()
    }

  }

  render() {
    let langCode = 0;
    let revenueLabel = dashboard.cards.revenue.label[langCode];
    let revenueIcon = dashboard.cards.revenue.icon;
    let now = updateStatus.now.label[langCode];
    let nowIcon = updateStatus.now.icon;

    const { user } = this.props.data;
    const revenueAmount = user ? user.currentBalance : '';
    const card = user ? (user.cardNumber || 'Отсутствует') : '';
    const editCardText = 'Изменить карту'

    return (
      <div className="main-content">
        {this.state.alert}
        <Grid fluid>
          <Row>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText={revenueLabel}
                statsValue={`${revenueAmount}₽`}
                statsIcon={<i className={nowIcon}/>}
                statsIconText={now}
              />
              <StatsCard
                bigIcon={<i className={`fa fa-credit-card text-success`}/>}
                statsText="Привязанная карта"
                statsValue={card}
                statsIcon={<Button onClick={this.editCard}>{editCardText}</Button>}
              />
              <Card
                title="Вывод"
                tableFullWidth
                ctAllIcons
                content={
                  <Table responsive>
                    <Button wd onClick={() => this.warningWithConfirmAndCancelMessage(revenueAmount)}>
                      Создать заявку на вывод
                    </Button>
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

const mapStateToProps = (state) => {
  return {
    data: state.dashboard.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCardNumber: bindActionCreators(artistActions.saveCardNumber, dispatch),
    withdraw: bindActionCreators(artistActions.withdraw, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
