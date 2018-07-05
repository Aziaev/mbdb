import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOnFocus: false,
      showPhoneTip: true,
    }
  }

  setValue(e) {
    let value = e.target.value.replace(/[^0-9.]/g, '').replace(/^(1|2|3|4|5|6|7|8|0)/, '');
    this.props.onPhoneChange(value);
  }

  onFocus(e) {
    this.setState({
      inputOnFocus: true,
      showPhoneTip: false
    })
  }

  onBlur(e) {
    this.setState({
      inputOnFocus: false
    })
  }

  render() {
    let { inputOnFocus, showPhoneTip } = this.state;
    let { noPhoneTip, phone, phoneError } = this.props;
    let borderStyle = inputOnFocus ? { borderColor: '#AAAAAA' } : {};
    return (
      <div style={localStyle}>
        <InputGroup>
          <InputGroup.Addon style={borderStyle}>+7</InputGroup.Addon>
          <FormControl
            autoComplete="off"
            placeholder='например: 9991234567'
            value={phone}
            onFocus={(e) => this.onFocus(e)}
            onBlur={(e) => this.onBlur(e)}
            onChange={(value) => this.setValue(value)}
            maxLength={10}
          />
        </InputGroup>
        <div>{phoneError}</div>
        <div>
          {(!noPhoneTip && showPhoneTip) &&
          <small><span className='text-danger'>* </span>Номер нужен для регистрации и восстановления пароля</small>}
        </div>
      </div>
    );
  }
}

export default PhoneInput;

const localStyle = {
  height: '50px'
};
