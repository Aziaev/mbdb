import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { selectStatus } from '../../variables/Variables.jsx';

class SetStatusAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  setValue(e) {
    console.log(e);
    this.setState({
      status: e.value
    })
  }

  render() {
    let status = this.state.status;
    let { onConfirm, onCancel } = this.props;
    return (
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Выберите статус"
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmBtnBsStyle='info'
        cancelBtnBsStyle="danger"
        confirmBtnText='Сохранить'
        cancelBtnText="Отменить"
        showCancel
        showConfirm={!!status}
      >
        <Row>
          <Col md={8} mdOffset={2} style={{paddingTop: '50px', paddingBottom: '50px'}}>
            <Select
              className="text-left"
              placeholder="Выберите статус"
              name="statusSelector"
              value={this.state.status}
              options={selectStatus}
              onChange={(value) => this.setValue(value)}
            />
          </Col>
        </Row>
      </SweetAlert>

    );
  }
}

export default SetStatusAlert;
