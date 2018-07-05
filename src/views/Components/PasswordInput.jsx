import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class PasswordInput extends React.Component {

  onPasswordChange(e) {
    let value = e.target.value;
    this.props.onPasswordChange(value)
  }

  render() {
    let { password, passwordError } = this.props;
    return (
      <div style={localStyle}>
        <FormGroup>
          <FormControl
            name='password'
            placeholder='Пароль'
            type='password'
            value={password}
            onChange={(value) => this.onPasswordChange(value)}
          />
          <div>
            {passwordError}
          </div>
        </FormGroup>
      </div>
    );
  }
}

export default PasswordInput;

const localStyle = {
  height: '50px'
};
