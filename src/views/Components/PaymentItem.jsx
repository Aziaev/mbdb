import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import constants from "../../constants";
import Button from '../../elements/CustomButton/CustomButton.jsx';
import { getLocale } from "../../helpers/index";
class PaymentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      type: null,
    };
  }

  componentWillMount() {
    let item = this.props.item;
    switch (item.status) {
      case 'ACCEPTED':
        this.setState({
          status: constants.updateStatus.accepted,
        });
        break;
      case 'OPEN':
        this.setState({
          status: constants.updateStatus.open
        });
        (item.method === 'withdraw' &&
          this.setState({
            type: 'info'
          }));
        break;
      case 'DISPUTED':
        this.setState({
          status: constants.updateStatus.disputed,
        });
        (item.method === 'withdraw' &&
          this.setState({
            type: 'warning'
          }));
        break;
      default:
        break;
    }
  }

  render() {
    let { item, cardNumber, admin, user, showSender, onClick } = this.props;
    let status = this.state.status;
    let langCode = 0;
    let bankCard = constants.PAYMENT_CONSTANTS.paymentTypes[0].title[langCode];
    let withdraw = constants.PAYMENT_CONSTANTS.paymentTypes[1].title[langCode];
    return (
      <tr key={item.id} className={this.state.type}>
        <td>
          <time dateTime={item.date.toISOString()}>
            <div>{item.date.toLocaleDateString(getLocale(langCode))}</div>
          </time>
        </td>

        {showSender &&
        <td>
          {item.sender_id === '' ? 'Донат' : item.sender_id}
        </td>
        }

        {user &&
        <td>
          {`${user.name}${user.surname && ` ${user.surname}`}`}
        </td>
        }

        <td>
          {item.method === 'card' && bankCard}
          {item.method === 'withdraw' && withdraw}
        </td>

        {cardNumber && <td>{cardNumber}</td>}

        <td className="text-right">{`${item.sum}₽`}</td>

        <td
          className="td-actions text-center"
          onClick={(admin && status === constants.updateStatus.open) && onClick()}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={item.status}>
                {status && status.label[langCode]}
              </Tooltip>
            }
          >
            <Button
              simple
              bsStyle={status && status.bsStyle}
              bsSize="xs">
              <i className={status && status.icon}/>
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    );
  }
}

export default PaymentItem;
