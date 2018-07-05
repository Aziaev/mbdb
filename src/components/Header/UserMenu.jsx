import React from "react"
import {Badge, Nav, NavItem} from "react-bootstrap"


const UserMenu = ({user, events}) =>
  <Nav pullRight>
    <NavItem eventKey={events.USER_PROFILE} className="inline-button avatar-button">
      <div className="avatar" style={{backgroundImage: `url('${user.avatar}')`}}/>
    </NavItem>
    <NavItem eventKey={events.USER_PROFILE} className="inline-button fullname">
      <div className="username">{user.name}&nbsp;{user.surname}</div>
      &nbsp;
      <Badge>{user.currentBalance} ₽</Badge>
    </NavItem>

    <NavItem eventKey={events.LOGOUT} className="inline-button exit-button">
      Выход
    </NavItem>
  </Nav>

export default UserMenu;
