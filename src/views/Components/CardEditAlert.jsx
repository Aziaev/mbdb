import React, {Component} from "react"
import {Col, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap"
import SweetAlert from "react-bootstrap-sweetalert"
import {withDrawForm} from "../../style"

class CardEditAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.cardNumber,
    };
  }

  setValue(e) {
    const cardNumber = e.target.value;
    this.setState({
      value: cardNumber
    })
  }

  isValid = (cardNumber)=> {
    return cardNumber && parseInt(cardNumber, 10).toString() === cardNumber && cardNumber.length === 16;
  }

  render() {
    let { onConfirm, onCancel } = this.props;
    let value = this.state.value;
    return (
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Привязанная карта"
        onConfirm={() => onConfirm(value)}
        onCancel={onCancel}
        confirmBtnBsStyle={'info'}
        cancelBtnBsStyle="danger"
        confirmBtnText={'Сохранить'}
        cancelBtnText="Отменить"
        showCancel
        showConfirm={this.isValid(value)}
      >
        <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <FormGroup
              controlId="formHorizontalNumber"
              style={withDrawForm}>
              <div>
                <Col sm={6} xsOffset={3}>
                  <InputGroup>
                    <FormControl
                      type="text"
                      name="type_number"
                      className={!this.isValid(value) && 'error'}
                      onChange={this.setValue.bind(this)}
                      placeholder='Укажите номер карты'
                    />
                  </InputGroup>
                </Col>
              </div>
            </FormGroup>
        </Row>
      </SweetAlert>

    );
  }
}

export default CardEditAlert;
