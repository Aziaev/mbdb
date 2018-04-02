import React, { Component } from 'react';
import { Col, Grid, Row, Table } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import Card from '../../components/Card/Card.jsx';
import { mockUsers } from "../../variables/Variables";

class AdminUsers extends Component {
  handleSwitch(elem, state) {
    console.log('handleSwitch. elem:', elem);
    console.log('userId:', elem.props.userId);
    console.log('new state:', state);
  }

  componentDidMount() {
    document.title = 'Панель администратора | Music Boom'
  }

  render() {
    let users = mockUsers;
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Список пользователей"
                category="Полный список пользователей"
                tableFullWidth
                content={
                  <Table responsive className="table-bigboy">
                    <thead>
                    <tr>
                      <th/>
                      <th className="text-left">Имя</th>
                      <th className="th-description">Жанр</th>
                      <th className="text-center">Дата регистрации</th>
                      <th className="text-center">Баланс</th>
                      <th className="text-right">Активность</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      users.map((user, key) => {
                        return <tr key={key}>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={user.avatar}/>
                            </div>
                          </td>
                          <td>{`${user.name}${user.surname && ` ${user.surname}`}`}</td>
                          <td>{user.genre}</td>
                          <td className="td-number text-center">{user.reg_date}</td>
                          <td className="td-number text-center">{`${user.balance} ₽`}</td>
                          <td className="td-number text-right">
                            <Switch
                              defaultValue={user.isActive}
                              onText="Да"
                              offText="Нет"
                              userId={user.id}
                              onChange={(el, state) => this.handleSwitch(el, state)}
                            />
                          </td>
                        </tr>
                      })
                    }
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

export default AdminUsers;
