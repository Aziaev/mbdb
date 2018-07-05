import React, {Component} from "react"
import {MenuItem, Nav} from "react-bootstrap"

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav pullRight>
          <MenuItem eventKey={4.5}>
            <div className="text-danger"><i className="pe-7s-close-circle"></i> Log out</div>
          </MenuItem>
        </Nav>
      </div>
    );
  }
}
export default HeaderLinks;
